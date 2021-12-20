import React from "react";
import { Grid } from '@material-ui/core';
import TicTacToe from "./TicTacToe";
import '../Stylesheets/TicTacToe.css';

function Article() {
    return(
  <div className='Article'>
<Grid container spacing={2} justifyContent='center'>
<Grid item xs={10} sm={6}>
<div style={{paddingLeft:'50px', paddingRight:'50px'}}>
  <p>My first react game tic-tac-toe </p>
</div>
</Grid>
<Grid item xs={4} sm={6} >
<div style={{paddingLeft:'10px', paddingRight:'10px'}}>
<TicTacToe />
</div>
</Grid>
</Grid>
</div>
    )}

export default Article;