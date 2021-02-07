import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { AppWrapper, TitleStyle } from './style';
import ListUsers from '../ListUsers/ListUsers';
import UserPage from '../UserPage/UserPage';

const App = () => (
  <AppWrapper>
    <TitleStyle>List Users</TitleStyle>

    <Router>
      <ul className="navbar-nav mr-auto">
        <li><Link to="/" className="nav-link"> Home </Link></li>
        <li><Link to="/user" className="nav-link">User</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={ListUsers} />
        <Route path="/user" component={UserPage} />
      </Switch>
    </Router>
  </AppWrapper>
);

export default App;
