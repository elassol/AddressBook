/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  UserPageWrapper,
  SubTitlePage,
  CardView,
  AvatarWrapper,
  TextWrapper,
  NameStyle,
  EmailWrapper,
  ButtonStyle,
} from './styles';

const UserPage = ({ user }) => {
  console.log('user page');
  const history = useHistory();

  return (
    <UserPageWrapper>
      <SubTitlePage>User Page</SubTitlePage>

      <CardView>
        <AvatarWrapper src={user.avatar} />
        <TextWrapper>
          <NameStyle>
            {user.first_name}
            {' '}
            {user.last_name}
          </NameStyle>
          <EmailWrapper href={`mailto: ${user.email}`}>{user.email}</EmailWrapper>
          <ButtonStyle onClick={() => history.push('/')}>Back</ButtonStyle>
        </TextWrapper>
      </CardView>
    </UserPageWrapper>
  );
};

const mapStateToProps = (state) => (
  { user: state.selectedUser }
);

export default connect(mapStateToProps)(UserPage);
