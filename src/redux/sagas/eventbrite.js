/* eslint-disable camelcase */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/event';
import { INIT } from '../actions/actionTypes';
import { apiEventGet } from '../../libs/api';
import events from '../../events';

function* eventGetSaga(key) {
  try {
    yield put(actions.eventGetRequest());

    const { data } = yield call(apiEventGet, key);

    yield put(actions.eventGetSuccess({ key, ...data }));
  } catch (err) {
    yield put(actions.eventGetFailure(err));
  }
}

function* eventsGet() {
  yield all(events.map(key => call(eventGetSaga, key)));
}

export function* watchEvents() {
  yield takeLatest(INIT, eventsGet);
}
