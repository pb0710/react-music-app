const defaultState = {
	isShow: false
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'CHANGE_PLAYLIST_STATUS':
			return { ...state, isShow: payload }
		default:
			return state
	}
}