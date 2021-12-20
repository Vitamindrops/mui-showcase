import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ReactComponent as Logo } from '../Media/LogoBlack.svg';

const useStyles = makeStyles(theme => ({
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar >
      <Toolbar>
       
        <label
          className={classes.logo}
        >
          <Logo />
        </label>
        
        <Typography variant="h6" className={classes.title}>
          React Projects
        </Typography>
      
        <Button variant='contained' className='ReactBtn' style={{ textDecoration: 'none', backgroundColor: 'orange', color: 'white', borderStyle: 'solid'  }} >
          Portfolio
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;