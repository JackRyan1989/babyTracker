import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddData from './pages/addData';
import help from './pages/help';
import Login from './pages/login';
import viewData from './pages/viewData';
import Signup from './pages/signup';
import Logout from './pages/logoutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/add" component={AddData}/>
        <Route exact path="/view" component={viewData}/>
        <Route exact path="/help" component={help}/>
        <Route exact path="/logout" component={Logout}/>
      </Switch>
    </Router>
  );
}

export default App;