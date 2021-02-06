import { takeEvery, call, put } from 'redux-saga/effects';
// import axios from 'axios';
import { DATA_REQUESTED, DATA_LOADED, API_ERRORED } from './actions';

function getData() {
  // eslint-disable-next-line no-console
  console.log('Fetching remote articles.');
  return fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    // eslint-disable-next-line no-console
    .then((data) => console.log(data.data));
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e });
  }
}

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}
