import { all } from 'redux-saga/effects';

import ClientesSaga from './ClientesSaga';

export default function* sagas() {
  yield all([
    ClientesSaga(),
  ]);
}