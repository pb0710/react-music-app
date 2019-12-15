import { combineReducers } from 'redux'
import header from '../Header/store/reducer'
import content from '../Content/store/reducer'
import sider from '../Sider/store/reducer'
import footer from '../Footer/store/reducer'

export default combineReducers({
	header,
	content,
	sider,
	footer
})