import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import addData from './pages/addData';
import help from './pages/help';
import Login from './pages/login';
import viewData from './pages/viewData';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/add" component={addData}/>
        <Route exact path="/view" component={viewData}/>
        <Route exact path="/help" component={help}/>
      </Switch>
    </Router>
  );
}

export default App;