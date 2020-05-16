import auth0 from 'auth0-js';

const REDIRECT_ON_LOGIN = 'redirect_on_login';

export default class Auth {
  history: any;
  userProfile: any;
  auth0: auth0.WebAuth;
  requestedScopes: string;

  constructor(history: any) {
    this.history = history;
    this.userProfile = null;
    this.requestedScopes = 'openid profile email read:customer';
    this.auth0 = new auth0.WebAuth({
      domain: 'viet-dev.auth0.com',
      //process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: 'PalYUmcqWSfe6TeKptEAn1N25az3OQeU',
      //process.env.REACT_APP_AUTH0_CLIENTID,
      //This to be configured for ENV..
      redirectUri: 'https://paper-and-pen.herokuapp.com/callback',
      //process.env.REACT_APP_AUTH0_CALLBACK,
      responseType: 'token id_token',
      scope: this.requestedScopes,
      //the audience is specified in Auth0 as Identifier in settings
      audience: 'http://localhost:3001',
    });
  }

  login = () => {
    localStorage.setItem(
      REDIRECT_ON_LOGIN,
      JSON.stringify(this.history.location)
    ); //remember the page the user was on when redirected
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    // auth0.parseHash - get the data that was passed from the URL and parse it out.
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        //write the data in our session
        this.setSession(authResult);
        //redirect location
        const redirectLocation =
          localStorage.getItem(REDIRECT_ON_LOGIN) === 'undefined'
            ? '/'
            : JSON.parse(localStorage.getItem(REDIRECT_ON_LOGIN) || '');
        //redirect after login
        this.history.push(redirectLocation);
      } else if (err) {
        this.history.push('/');
        alert(`Error: ${err.error}`);
        console.log(err);
      }
      localStorage.removeItem(REDIRECT_ON_LOGIN);
    });
  };

  setSession = (authResult: any) => {
    //set the time that the access token will expire
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 * new Date().getTime()
    );

    //scope
    const scopes = authResult.scope || this.requestedScopes || '';

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));
  };

  isAuthenticated = () => {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    if (new Date().getTime() < expiresAt) {
      return true;
    }
  };

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('scopes');
    this.userProfile = null;
    this.history.push('/');
    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      returnTo: 'http://localhost:3000',
    });
  };

  getAccessToken = () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      this.login();
    }
    return accessToken;
  };

  // getProfile = (cb: any) => {
  //   if (this.userProfile) return cb(this.userProfile);
  //   this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
  //     if (profile) this.userProfile = profile;
  //     cb(profile, err);
  //   });
  // };

  // getProfile = () => {
  //   this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
  //     console.log(profile);
  //     return profile;
  //   });
  // };

  //checks list of granted scopes
  userHasScopes = (scopes: any) => {
    const grantedScopes = JSON.parse(
      localStorage.getItem('scopes') || ''
    ).split(' ');
    // returns true if every scope is found
    return scopes.every((scope: string) => grantedScopes.includes(scope));
  };
}
