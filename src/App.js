import React from 'react';
import logo from './logo.svg';
import './Stylesheets/App.css';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './Theme';
// -------------------Components----------------
import AppBar from './Components/navbar';
import Header from './Components/Header';
import RouteButtons from './RouteButtons';

// -------------------Components----------------

function App() {
  return (
    <ThemeProvider theme={theme} >
   
       <div className="App">
        <header className="App-header">
        <AppBar />
        <Header />
        <RouteButtons />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    
    </ThemeProvider>
  );
}

export default App;
