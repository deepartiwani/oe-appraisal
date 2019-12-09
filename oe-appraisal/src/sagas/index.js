import { all, fork } from 'redux-saga/effects';
import watchGetAccessTokenLogin from './watchers/getAccessTokenLogin';

export default function* rootSaga() {
    yield(fork(watchGetAccessTokenLogin))
}