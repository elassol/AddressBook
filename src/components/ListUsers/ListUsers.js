/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData, getUser } from '../../redux/actions';
import {
  WrapperHeaderPage,
  SubTitlePage,
  ListGroup,
  ListItem,
  TextWrapper,
  NameStyle,
} from './styles';

const ListUsers = ({
  getData, users, getUser, loading, error,
}) => {
  useEffect(() => {
    getData();
    getUser();
  }, [getData, getUser]);

  const history = useHistory();

  const selectUserList = user => {
    console.log('click');
    console.log(user);
    getUser(user);
    history.push(`/user/${user.id}`);
  };

  return (
    <ListGroup>

      <WrapperHeaderPage>
        <SubTitlePage>User Page</SubTitlePage>
      </WrapperHeaderPage>
      {loading && 'loading component'}
      {error && `Oops... ${error}`}
      {users.map(user => (
        <ListItem key={user.id} onClick={() => selectUserList(user)}>
          <TextWrapper>
            <NameStyle>
              {user.first_name}
              {' '}
              {user.last_name}
            </NameStyle>
          </TextWrapper>
        </ListItem>
      ))}

    </ListGroup>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  selectedUser: state.selectedUser,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  getUser: user => dispatch(getUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
