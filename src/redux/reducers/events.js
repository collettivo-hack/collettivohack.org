import { EVENT_GET_REQUEST, EVENT_GET_SUCCESS, EVENT_GET_FAILURE } from '../actions/actionTypes';

const initialState = {
  isWaiting: false,
  payload: {},
  error: '',
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case EVENT_GET_REQUEST:
      return Object.assign({}, state, {
        isWaiting: true,
        error: initialState.error,
      });
    case EVENT_GET_SUCCESS:
      return Object.assign({}, state, {
        isWaiting: false,
        payload: { ...state.payload, [action.payload.key]: action.payload },
        error: initialState.error,
      });
    case EVENT_GET_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isWaiting: false,
      });
    default:
      return state;
  }
}
