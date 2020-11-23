import React from 'react';

import Chat from './components/Chat/Chat';
import Login from "./components/login/login"
import Menu from './components/menu/Menu'
import SignIn from './components/signin/SignIn'

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/:id" component={Menu}/>
      <Route path="/chat" component={Chat} />
      <Route path="/signin" component={SignIn} />
    </Router>
  );
}

export default App;
