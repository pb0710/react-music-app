import { all, fork } from 'redux-saga/effects'
import drawerSaga from '../Drawer/store/saga'

export default function* () {
	yield all([
		fork(drawerSaga)
  ])
}