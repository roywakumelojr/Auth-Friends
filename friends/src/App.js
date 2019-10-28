import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './component/Login';
import HomePage from './component/HomePage';
import Dashboard from './component/FriendsList';
import PrivateRoute from './component/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Nav">
        <h1>Friends List App</h1>
          <div className='Links'>
            <Link className='NavLinks' to="/api/login">Welcome</Link>
            <Link className='NavLinks' to="/protected">Friends List</Link>
          </div>
        </div>
        <Switch className='Container'>
          <PrivateRoute path="/protected" component={Dashboard} />
          <Route path="/" component={HomePage} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
