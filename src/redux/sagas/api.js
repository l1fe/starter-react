import { all, put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { API_URL } from 'config';

import { normalizeById } from '../utils';
import { api, entities } from '../types';

function* fetchTodos(action) {
  try {
    // async goes here
    const resp = yield call(axios.get, `${API_URL}/todos/`);
    const data = resp.data;
    yield put({
      type: api.todos.fetch.success,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: api.todos.fetch.failure,
      message: e.message,
    });
  }
}

function* onFetchTodosSuccess(action) {
  // TODO move to middleware
  const data = normalizeById(action.payload);

  yield put({
    type: entities.todos.addItems,
    payload: data,
  });
}

export default function* apiSaga() {
  const watches = [
    yield takeLatest(api.todos.fetch.request, fetchTodos),
    yield takeEvery(api.todos.fetch.success, onFetchTodosSuccess),
  ];

  yield all(watches);
};
