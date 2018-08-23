import { all, put, takeLatest } from 'redux-saga/effects';

import { example } from '../types';

function* fetchItems(action) {
  try {
    // async goes here
    yield put({
      type: example.fetchItems.success,
      response: { },
    });
  } catch (e) {
    yield put({
      type: example.fetchItems.failure,
      message: e.message,
    });
  }
}

export default function* exampleSaga() {
  const watches = [
    yield takeLatest(example.fetchItems.request, fetchItems),
  ];

  yield all(watches);
};
