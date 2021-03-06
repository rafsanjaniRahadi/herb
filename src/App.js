import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import 'assets/scss/style.scss/';
import LandingPage from 'pages/LandingPage';
import DetailPage from 'pages/DetailPage';
import Checkout from 'pages/Checkout';
import AboutUs from 'pages/AboutUs';
import LoginPage from 'pages/LoginPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/properties/:id" component={DetailPage} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
