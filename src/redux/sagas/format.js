/* eslint-disable camelcase */

import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/format';
import { EVENT_GET_SUCCESS } from '../actions/actionTypes';
import { apiFormatGet } from '../../libs/api';

function* formatGetSaga({ payload: { format_id } }) {
  try {
    yield put(actions.formatGetRequest());

    const { data } = yield call(apiFormatGet, format_id);

    yield put(actions.formatGetSuccess({ key: format_id, ...data }));
  } catch (err) {
    yield put(actions.formatGetFailure(err));
  }
}

export function* watchformats() {
  yield takeLatest(EVENT_GET_SUCCESS, formatGetSaga);
}
