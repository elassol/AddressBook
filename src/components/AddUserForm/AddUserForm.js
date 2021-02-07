/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../redux/actions';

const AddUserForm = ({ addUser }) => {
  console.log('add user');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [avatar, setAvatar] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser({ first_name: name, last_name: lastName });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <p>First Name:</p>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          placeholder="Enter title"
          onChange={handleChangeName}
        />
      </div>
      <div>
        <p>Last Name:</p>
        <input
          type="text"
          className="form-control"
          id="lastname"
          value={lastName}
          placeholder="Enter last name"
          onChange={handleChangeLastName}
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg">
        SAVE
      </button>
    </form>
  );
};

const mapStateToProps = (state) => (
  { users: state.users }
);

const mapDispatchToProps = (dispatch) => (
  { addUser: (user) => dispatch(addUser(user)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
