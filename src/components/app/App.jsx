import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/* Views */
import Home from 'views/home/Home.jsx';
import About from 'views/about/About.jsx';
import Services from 'views/services/Services.jsx';
import Contact from 'views/contact/Contact.jsx';
import Authentication from 'views/authentication/Authentication.jsx';
import RegisterContractor from 'views/register-contractor/RegisterContractor.jsx';

/* Components */
import Header from 'components/layout/header/Header.jsx';
import Footer from 'components/layout/footer/Footer.jsx';

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
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/authentication">
            <Authentication />
          </Route>
          <Route path="/register-contractor">
            <RegisterContractor />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
