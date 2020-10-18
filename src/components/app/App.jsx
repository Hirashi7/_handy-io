import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/* Views */
import Home from '../../views/home/Home.jsx';
import About from '../../views/about/About.jsx';

/* Components */
import Header from 'components/layout/header/Header.jsx';

import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
