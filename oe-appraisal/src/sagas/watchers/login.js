import { all, fork } from 'redux-saga/effects';
import watchLogin from '../watchers/login';

export default function* rootSaga() {
    yield(fork(watchLogin))
}