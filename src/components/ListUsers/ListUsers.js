/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../redux/actions';
import {
  ListGroup,
  ListItem,
  AvatarWrapper,
  TextWrapper,
} from './styles';

const ListUsers = ({ getData, users }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  const value = { users };
  // eslint-disable-next-line no-console
  console.log(value);

  return (
    <ListGroup>
      <ListItem>
        <AvatarWrapper>avatar</AvatarWrapper>
        <TextWrapper>user.first_name</TextWrapper>
        <TextWrapper>user.last_name</TextWrapper>
        <TextWrapper>user.email</TextWrapper>
      </ListItem>
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
