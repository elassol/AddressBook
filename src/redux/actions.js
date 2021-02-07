export const ADD_USER = 'ADD_USER';
export const SELECT_USER = 'SELECT_USER';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const DATA_REQUESTED = 'DATA_REQUESTED';
export const DATA_LOADED = 'DATA_LOADED';
export const API_ERRORED = 'API_ERRORED';

export function addUser(payload) {
  return { type: ADD_USER, payload };
}

export function getUser(payload) {
  return { type: SELECT_USER, payload };
}

export function updateUsers(id, newUpdateUsers) {
  return { type: UPDATE_SUCCESS, id, newUpdateUsers };
}

export function getData() {
  return { type: DATA_REQUESTED };
}

export function deleteSuccess(id) {
  return { type: DELETE_SUCCESS, id };
}

export const receiveDataSuccess = (data) => ({
  type: DATA_LOADED,
  data,
});

export const receiveDataFailure = (error) => ({
  type: API_ERRORED,
  error,
});
