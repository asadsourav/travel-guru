
import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import CoxsBazarDetails from './components/CoxsBazarDetailes/CoxsBazarDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SreemongolDetails from './components/SreempngolDetails/SreemongolDetails';
import SundorbanDetails from './components/SundorbanDetails/SundorbanDetails';
import Booking from './components/Booking/Booking';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =useState({})
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]} >
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/CoxsBazarDetails">
            <CoxsBazarDetails></CoxsBazarDetails>
          </Route>
          <Route path="/SreemongolDetails">
            <SreemongolDetails></SreemongolDetails>
          </Route>
          <Route path="/SundorbanDetails">
            <SundorbanDetails></SundorbanDetails>
          </Route>
          <PrivateRoute path="/Booking">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/signUp">
            <SignUpPage></SignUpPage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
        </Switch>
      </Router>
    </div>
     </UserContext.Provider>
  );
}

export default App;
