/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData, selectedUser } from '../../redux/actions';
import {
  ListGroup,
  ListItem,
  AvatarWrapper,
  TextWrapper,
  NameStyle,
  EmailWrapper,
} from './styles';

const ListUsers = ({ getData, users }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  const selectUserList = (user) => {
    console.log('click');
    console.log(user);
    selectedUser(user);
  };

  return (
    <ListGroup>

      {users.map((user) => (
        <ListItem key={user.id} onClick={() => selectUserList(user)}>
          <AvatarWrapper src={user.avatar} />
          <TextWrapper>
            <NameStyle>
              {user.first_name}
              {' '}
              {user.last_name}
            </NameStyle>
            <EmailWrapper>{user.email}</EmailWrapper>

          </TextWrapper>
        </ListItem>
      ))}

    </ListGroup>
  );
};

const mapStateToProps = (state) => (
  { users: state.users }
);

const mapDispatchToProps = (dispatch) => (
  { getData: () => dispatch(getData()) }
);

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
