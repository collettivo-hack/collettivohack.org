import * as types from './actionTypes';

export function categoryGetRequest() {
  return {
    type: types.CATEGORY_GET_REQUEST,
  };
}

export function categoryGetSuccess(payload) {
  return {
    type: types.CATEGORY_GET_SUCCESS,
    payload,
  };
}

export function categoryGetFailure(error) {
  return {
    type: types.CATEGORY_GET_FAILURE,
    error,
  };
}
