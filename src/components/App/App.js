import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { AppWrapper, TitleStyle } from './style';
import ListUsers from '../ListUsers/ListUsers';
import UserPage from '../UserPage/UserPage';
import UserForm from '../UserForm/UserForm';

const App = () => (
  <AppWrapper>
    <TitleStyle>Contact List App</TitleStyle>

    <Router>
      <Switch>
        <Route exact path="/" component={ListUsers} />
        <Route path="/user/:id" component={UserPage} />
        <Route path="/edit-user" component={UserForm} />
      </Switch>
    </Router>
  </AppWrapper>
);

export default App;
