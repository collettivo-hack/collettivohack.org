import * as types from './actionTypes';

export function formatGetRequest() {
  return {
    type: types.FORMAT_GET_REQUEST,
  };
}

export function formatGetSuccess(payload) {
  return {
    type: types.FORMAT_GET_SUCCESS,
    payload,
  };
}

export function formatGetFailure(error) {
  return {
    type: types.FORMAT_GET_FAILURE,
    error,
  };
}
