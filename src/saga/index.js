import { all, fork, put, takeEvery, select } from 'redux-saga/effects'

// function* userLoginSaga() {
//  const state = yield select()
//  const { username, password } = state.login
//  const payload = yield api.userLogin({ username, password })
//  if (payload) {
//    yield put({ type: 'LOGIN_SUCCESS' })
//  } else {
//    yield put({ type: 'LOGIN_FAIL' })
//  }
// }

// // ------------------------watch------------------------------------------------------------

// function* watchUsernameChange() {
//  yield takeEvery("INPUT_USERNAME", changeUsernameSaga)
// }

export default function* () {
  yield all([
    // fork(watchUsernameChange),
    // fork(watchPasswordChange),
    // fork(watchUserLogin),
    // fork(watchFetchListStatus),
    // fork(watchFetchUserInfo)
  ])
}