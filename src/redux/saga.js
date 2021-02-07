import { takeEvery, call, put } from 'redux-saga/effects';
// import axios from 'axios';
import {
  DATA_REQUESTED, DATA_LOADED, API_ERRORED, editUser, UPDATE_REQUEST,
} from './actions';

async function getData() {
  // eslint-disable-next-line no-console
  console.log('Fetching remote articles.');
  const response = await fetch('https://reqres.in/api/users');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const data = await response.json();
    return data.data;
  }
}

function updateUserAPI(id, data) {
  return fetch(`https://reqres.in/api/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
    .then((res) => res.json());
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (error) {
    yield put({ type: API_ERRORED, payload: error });
  }
}

function* updateUser({ id, data }) {
  try {
    const newData = yield call(updateUserAPI, id, data);
    yield put(editUser(id, newData));
  } catch (error) {
    yield put({ type: API_ERRORED, payload: error });
  }
}

function* updateWatcher() {
  yield takeEvery('UPDATE_REQUEST', updateUser);
}

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}
