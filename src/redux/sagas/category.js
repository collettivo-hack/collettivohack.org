/* eslint-disable camelcase */

import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/category';
import { EVENT_GET_SUCCESS } from '../actions/actionTypes';
import { apiCategoryGet } from '../../libs/api';

function* categoryGetSaga({ payload: { category_id } }) {
  try {
    yield put(actions.categoryGetRequest());

    const { data } = yield call(apiCategoryGet, category_id);

    yield put(actions.categoryGetSuccess({ key: category_id, ...data }));
  } catch (err) {
    yield put(actions.categoryGetFailure(err));
  }
}

export function* watchcategories() {
  yield takeLatest(EVENT_GET_SUCCESS, categoryGetSaga);
}
