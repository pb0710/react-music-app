import { all, fork } from 'redux-saga/effects'
import headerSaga from '../Header/store/saga'
import siderSaga from '../Sider/store/saga'
import footerSaga from '../Footer/store/saga'
import contentSaga from '../Content/store/saga'

export default function* () {
	yield all([
		fork(headerSaga),
		fork(siderSaga),
		fork(footerSaga),
		fork(contentSaga)
  ])
}