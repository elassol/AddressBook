import {
  DATA_REQUESTED, DATA_LOADED, API_ERRORED,
} from './actions';

const rootReducer = (
  state = { users: [], error: null, loading: false },
  { type, users, error },
) => {
  switch (type) {
    case DATA_REQUESTED:
      return { ...state, error: null, loading: true };
    case DATA_LOADED:
      return {
        ...state, users, error: null, loading: false,
      };
    case API_ERRORED:
      return {
        ...state, users: [], error, loading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
