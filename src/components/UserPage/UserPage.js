/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';

const UserPage = ({ user }) => {
  console.log('user page');
  return (
    <div>
      <img src="img.jpg" alt="John" />
      <h2>
        {user.first_name}
        {' '}
        {user.last_name}
      </h2>
      <a href={`mailto:${user.email}`}>{user.email}</a>
    </div>
  );
};

const mapStateToProps = (state) => (
  { user: state.selectedUser }
);

export default connect(mapStateToProps)(UserPage);
