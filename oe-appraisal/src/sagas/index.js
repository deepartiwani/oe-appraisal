import { all, fork } from 'redux-saga/effects';
import watchGetUserDetailsSaga from './watchers/watchGetUserDetailsSaga';

export default function* rootSaga() {
    yield(fork(watchGetUserDetailsSaga))
}