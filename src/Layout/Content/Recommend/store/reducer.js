const defaultState = {
	isShow: false,
	userInfo: {}
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'GET_LIST_STATUS':
			return { ...state, isShow: payload }
		default:
			return state
	}
}