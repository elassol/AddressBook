export const ADD_USER = 'ADD_USER';
export const DATA_REQUESTED = 'DATA_REQUESTED';
export const DATA_LOADED = 'DATA_LOADED';
export const API_ERRORED = 'API_ERRORED';

export function addUser(payload) {
  return { type: ADD_USER, payload };
}

export function getData() {
  console.log('fire get saga');
  return { type: DATA_REQUESTED };
}

export const receiveDataSuccess = (data) => ({
  type: DATA_LOADED,
  data,
});

export const receiveDataFailure = (error) => ({
  type: API_ERRORED,
  error,
});
