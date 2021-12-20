import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Stylesheets/styles.css";
import { Button } from "@material-ui/core";
import LotteryGame from "./LotteryProgram/LotteryGame";
import Article from "./Components/Article";
import './Stylesheets/TicTacToe.css'

const Home = () => (
  <div>
    <h2>Program One</h2>
    <Article />
  </div>
);

export default function RouteButtons() {
  return (
    <div>
         <Button variant='outlined' className='ReactBtn'> <Link to="/" style={{ textDecoration: 'none', color: 'orange' }}>Program One</Link></Button>
         <Button variant='outlined' className='ReactBtn'><Link to="/LotteryGame" style={{ textDecoration: 'none', color: 'orange' }}>Program Two</Link></Button>
    
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
         
          <Route path="/LotteryGame">
              <LotteryGame />
        </Route>
      </Switch>
    </div>
  );
}
