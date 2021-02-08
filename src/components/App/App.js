import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../theme';
import { AppWrapper, TitleStyle } from './style';
import ListUsers from '../ListUsers/ListUsers';
import UserPage from '../UserPage/UserPage';
import UserForm from '../UserForm/UserForm';

const App = () => (
  <AppWrapper>
    <ThemeProvider theme={appTheme}>
      <TitleStyle>Contact List App</TitleStyle>

      <Router>
        <Switch>
          <Route exact path="/" component={ListUsers} />
          <Route path="/user/:id" component={UserPage} />
          <Route path="/edit-user" component={UserForm} />
        </Switch>
      </Router>
    </ThemeProvider>
  </AppWrapper>
);

export default App;
