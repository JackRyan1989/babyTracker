import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddData from './pages/addData';
import Help from './pages/help';
import Login from './pages/login';
import ViewData from './pages/viewData';
import Signup from './pages/signup';
import Logout from './pages/logoutPage';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/add" component={AddData}/>
        <Route exact path="/dashboard" component={ViewData}/>
        <Route exact path="/help" component={Help}/>
        <Route exact path="/logout" component={Logout}/>
      </Switch>
    </Router>
  );
}

export default App;