import { put, takeLatest, call } from 'redux-saga/effects';

import { getAccessTokenSuccess } from '../../actions/getAccessTokenLogin';
import { getAccessTokenLogin } from '../../api/getaccesstokenlogin';

function* workerGetAccessTokenLoginSaga({ payload: { currentPage,recordPerPage } }) {
  const getAccessToken = yield call(getAccessTokenLogin, currentPage, recordPerPage);
  yield put(getAccessTokenSuccess(getAccessToken));
}

export default function* watchGetAccessTokenLoginSaga() {
  yield takeLatest('GET_ACCESS_TOKEN', workerGetAccessTokenLoginSaga);
}