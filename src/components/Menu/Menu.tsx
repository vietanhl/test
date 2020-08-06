import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../Logout';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const ContainerUl = styled.ul`
  padding-top: 20px;
  text-align: center;
  list-style: none;
  font-family: 'Abril Fatface', cursive;

  &:hover {
    color: #282c34;
  }
`;

const ContainerLi = styled.li`
  display: inline;
  padding-right: 50px;

  &:hover {
    color: #282c34;
  }
`;
const ContainerLogo = styled.li`
  display: inline;
  padding-right: 50px;
  text-align: left;

  &:hover {
    color: #282c34;
  }
`;
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

const Menu: React.FunctionComponent = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const Desktop = ({ children }: any) => {
  //   const isDesktop = useMediaQuery({ minWidth: 992 });
  //   return isDesktop ? children : null;
  // };
  // const Tablet = ({ children }: any) => {
  //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  //   return isTablet ? children : null;
  // };

  // RESPONSIVENESS
  const Mobile = ({ children }: any) => {
    const isMobile = useMediaQuery({ maxWidth: 900 });
    return isMobile ? children : null;
  };
  const Default = ({ children }: any) => {
    const isNotMobile = useMediaQuery({ minWidth: 901 });
    return isNotMobile ? children : null;
  };

  const { isAuthenticated } = props.auth;
  return (
    <div>
      {/* <Desktop>Desktop or laptop</Desktop>
      <Tablet>Tablet</Tablet> */}
      <Mobile>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Menu{' '}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button key="home">
                <NavLink className="link" to="/home">
                  <p className="menu-heading"> Home </p>
                </NavLink>
              </ListItem>
              <ListItem button key="treatment">
                <NavLink className="link" to="/treatment">
                  <p className="menu-heading"> Book now </p>
                </NavLink>
              </ListItem>
              <ListItem button key="treatment">
                <NavLink className="link" to="/contact">
                  <p className="menu-heading"> Contact </p>
                </NavLink>
              </ListItem>
              {isAuthenticated() ? (
                <ListItem button key="admin">
                  <NavLink className="link" to="/scopes">
                    <p className="menu-heading"> Admin </p>
                  </NavLink>
                </ListItem>
              ) : null}
              {isAuthenticated() ? (
                <ListItem button key="admin-edit">
                  <NavLink className="link" to="/admin-edit">
                    <p className="menu-heading"> Manage </p>
                  </NavLink>
                </ListItem>
              ) : null}
              {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )} */}
            </List>
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
          </main>
        </div>
      </Mobile>
      <Default>
        <div>
          <ContainerUl>
            <ContainerLogo>
              {' '}
              <NavLink className="menu-heading" to="/home">
                Home
              </NavLink>{' '}
            </ContainerLogo>
            <ContainerLi>
              {' '}
              <NavLink className="menu-heading" to="/treatment">
                Book Now
              </NavLink>{' '}
            </ContainerLi>
            <ContainerLi>
              {' '}
              <NavLink className="menu-heading" to="/contact">
                Contact
              </NavLink>{' '}
            </ContainerLi>
            <ContainerLi>
              {isAuthenticated() ? (
                <NavLink className="menu-heading" to="/scopes">
                  Admin
                </NavLink>
              ) : null}{' '}
            </ContainerLi>
            <ContainerLi>
              {isAuthenticated() ? (
                <NavLink className="menu-heading" to="/admin-edit">
                  Manage
                </NavLink>
              ) : null}{' '}
            </ContainerLi>
            <ContainerLi>
              {!isAuthenticated() ? (
                <LoginButton {...props} />
              ) : (
                <LogoutButton {...props} />
              )}
            </ContainerLi>
          </ContainerUl>
        </div>
      </Default>
    </div>
  );
};

export default Menu;
