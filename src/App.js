import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddData from './pages/addData';
import Login from './pages/login';
import Logout from './pages/logoutPage';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/add" component={AddData}/>
        <Route exact path="/logout" component={Logout}/>
        <Route path ="*" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;