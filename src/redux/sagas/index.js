import { all, fork } from 'redux-saga/effects';

import { watchEvents } from './eventbrite';
import { watchcategories } from './category';
import { watchformats } from './format';

export default function* rootSaga() {
  yield all([fork(watchEvents), fork(watchcategories), fork(watchformats)]);
}
