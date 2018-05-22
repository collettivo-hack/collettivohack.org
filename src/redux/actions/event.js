import * as types from './actionTypes';

export function eventGetRequest() {
  return {
    type: types.EVENT_GET_REQUEST,
  };
}

export function eventGetSuccess(payload) {
  return {
    type: types.EVENT_GET_SUCCESS,
    payload,
  };
}

export function eventGetFailure(error) {
  return {
    type: types.EVENT_GET_FAILURE,
    error,
  };
}
