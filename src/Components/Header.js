import React from "react";
import { Typography } from '@material-ui/core';

function Header(){
return(
    <>
    <Typography variant='h2' component='div'>
        Welcome to my React projects
    </Typography>
    <SubHeading />
    </>
)
}

function SubHeading(){
    return(
    <Typography variant='subtitle1'>
    This page was created with material ui
  </Typography>
    )}
export default Header;