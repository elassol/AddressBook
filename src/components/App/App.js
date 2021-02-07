import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { AppWrapper, TitleStyle } from './style';
import ListUsers from '../ListUsers/ListUsers';
import UserPage from '../UserPage/UserPage';
import AddUserForm from '../AddUserForm/AddUserForm';

const App = () => (
  <AppWrapper>
    <TitleStyle>Contact List App</TitleStyle>

    <Router>
      <Switch>
        <Route exact path="/" component={ListUsers} />
        <Route path="/user/:id" component={UserPage} />
        <Route path="/add-user" component={AddUserForm} />
      </Switch>
    </Router>
  </AppWrapper>
);

export default App;
