//This package gives access to our env variables
require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("express-jwt"); //validate jwt and set req.user
const jwks = require("jwks-rsa"); //retrieve RSA keys from a json web key (jwks) endpoint
const checkScope = require("express-jwt-authz"); //validate jwt scopes

const port = 3001;

//public API
app.get("/public", (req, res) => {
  res.json({
    message: "hello from a public API"
  });
});

//configure secure API - handles jwt
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://viet-dev.auth0.com/.well-known/jwks.json"
  }),
  audience: "http://localhost:3001",
  issuer: "https://viet-dev.auth0.com/",
  algorithms: ["RS256"]
});

app.use(jwtCheck);

app.get("/authorized", function (req, res) {
  res.send("Secured Resource");
});

//private API
// app.get("/book", jwtCheck, (req, res) => {
//   res.json({
//     message: "hello from a book private API"
//   });
// });
app.get("/book", (req, res) => {
  res.json({
    message: "hello from a book private API"
  });
});


//scope API
app.get("/scopes", jwtCheck, checkScope(["read:customer"]), (req, res) => {
  res.json({
    message: "hello you have read website scope"
  });
});

//Admin api
//express middleware to read roles
const checkRole = role => {
  return (req, res, next) => {
    const assignedRoles = req.user["http://localhost:3000/roles"];
    if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) {
      //allows the process to continue
      return next();
    } else {
      return res.status(401).send("Insufficient role");
    }
  };
};

app.get("/admin", jwtCheck, checkRole("admin"), (req, res) => {
  res.json({
    message: "hello from a admin API"
  });
});

app.listen(port);
console.log("API server listening on " + process.env.REACT_APP_API_URL);