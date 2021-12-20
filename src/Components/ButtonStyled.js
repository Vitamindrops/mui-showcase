import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE688B, #FF8E53)',
      marginBottom: 15,
      border: 0,
      borderRadius: 15,
      color: 'white',
      padding: '5px 30px'
    },
  });
  

export default function ButtonStyled(){
    const classes = useStyles();
    return <Button className={classes.root}>Test Styled Button</Button>
  }

