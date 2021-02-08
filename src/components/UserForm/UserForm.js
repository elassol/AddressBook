/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editUser } from '../../redux/actions';
import {
  EditPageWrapper,
  WrapperHeaderPage,
  SubTitlePage, InputFields,
  LabelFieldsForm,
  FormBlock,
  ButtonStyle,
  FormStyles,
  FormWarpper,
  AvatarWrapper,
} from './styles';

const AddUserForm = ({ editUser, users, selectedUser }) => {
  console.log('Edit user');
  const [name, setName] = useState(selectedUser.first_name);
  const [lastName, setLastName] = useState(selectedUser.last_name);
  const [email, setEmail] = useState(selectedUser.email);
  const [avatar, setAvatar] = useState(selectedUser.avatar);

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeLastName = event => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangeAvatar = event => {
    setAvatar(event.target.value);
  };

  const handleSubmit = event => {
    const id = users.length + 1;
    event.preventDefault();
    editUser({
      first_name: name, last_name: lastName, email, id, avatar,
    });
  };

  return (
    <EditPageWrapper>
      <WrapperHeaderPage>
        <SubTitlePage>Edit User Page</SubTitlePage>
      </WrapperHeaderPage>
      <FormWarpper>
        <FormStyles onSubmit={handleSubmit}>
          <FormBlock className="form-group">
            <LabelFieldsForm>First Name:</LabelFieldsForm>
            <InputFields
              type="text"
              className="form-control"
              id="name"
              value={name}
              placeholder="Enter title"
              onChange={handleChangeName}
            />
          </FormBlock>
          <FormBlock>
            <LabelFieldsForm>Last Name:</LabelFieldsForm>
            <InputFields
              type="text"
              className="form-control"
              id="lastname"
              value={lastName}
              placeholder="Enter last name"
              onChange={handleChangeLastName}
            />
          </FormBlock>
          <FormBlock>
            <LabelFieldsForm>Email:</LabelFieldsForm>
            <InputFields
              type="text"
              className="form-control"
              id="lastname"
              value={email}
              placeholder="Enter last name"
              onChange={handleChangeEmail}
            />
          </FormBlock>
          <FormBlock>
            <LabelFieldsForm>Avatar:</LabelFieldsForm>
            <InputFields
              type="text"
              className="form-control"
              id="lastname"
              value={avatar}
              placeholder="Enter last name"
              onChange={handleChangeAvatar}
            />
          </FormBlock>
          <ButtonStyle type="submit" className="btn btn-success btn-lg">
            Update User
          </ButtonStyle>
        </FormStyles>
        <AvatarWrapper>
          <img src={avatar} alt="" />
        </AvatarWrapper>
      </FormWarpper>

    </EditPageWrapper>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  selectedUser: state.selectedUser,
});

const mapDispatchToProps = dispatch => (
  {
    editUser: user => dispatch(editUser(user)),
  }

);

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
