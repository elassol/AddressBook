import { takeEvery, call, put } from 'redux-saga/effects';
// import axios from 'axios';
import { DATA_REQUESTED, DATA_LOADED, API_ERRORED } from './actions';

function getData() {
  // eslint-disable-next-line no-console
  console.log('Fetching remote articles.');
  return fetch('https://reqres.in/api/users')
    .then((response) => response.json());
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, user: payload });
    // yield put({ type: DATA_LOADED, payload });
  } catch (error) {
    yield put({ type: API_ERRORED, payload: error });
  }
}

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}
