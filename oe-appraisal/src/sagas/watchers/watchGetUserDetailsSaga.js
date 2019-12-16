import { put, takeLatest, call } from 'redux-saga/effects';

import { getUserDetailsSuccess } from '../../actions/getUserDetails';
import { getUserAuthenticated } from '../../api/getUserDetails';

function* workerGetUserDetailsSaga({ payload: { body } }) {
  const getUserDetails = yield call(getUserAuthenticated, body);
  yield put(getUserDetailsSuccess(getUserDetails));
}

export default function* watchGetUserDetailsSaga() {
  yield takeLatest('GET_ACCESS_TOKEN', workerGetUserDetailsSaga);
}