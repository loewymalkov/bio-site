import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bio: {
    marginLeft: 'auto',
    marginRight: -12,
  }
}));

function Header(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Button href="#">ABOUT US</Button>
          <Button href="#bio" className={classes.bio}>BIO</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;