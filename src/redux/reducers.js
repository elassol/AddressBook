/* eslint-disable no-console */
import {
  DATA_REQUESTED, DATA_LOADED, API_ERRORED, SELECT_USER, ADD_USER,
} from './actions';

const initialState = {
  users: [],
  selectedUser: {},
  error: null,
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  console.log('this is the START reducers');
  console.log(state);
  console.log(action.type);
  console.log(action.payload);
  console.log('this is END of reducers');

  switch (action.type) {
    case ADD_USER:
      return { ...state, users: state.users.concat(action.payload) };
    case SELECT_USER:
      return { ...state, selectedUser: action.payload };
    case DATA_REQUESTED:
      return { ...state, error: null, loading: true };
    case DATA_LOADED:
      return { ...state, users: action.payload, loading: false };
    case API_ERRORED:
      return {
        ...state, users: [], error: state.error, loading: false,
      };
    // case DELETE_SUCCESS:
    //   const newState = state.filter((user) => user.id !== action.id);
    //   return newState;
    default:
      return state;
  }
};

export default rootReducer;
