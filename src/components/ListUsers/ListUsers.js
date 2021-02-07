/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData, selectUser } from '../../redux/actions';
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

  return (
    <ListGroup>

      {users.map((user) => (
        <ListItem key={user.id} onClick={selectUser}>
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
