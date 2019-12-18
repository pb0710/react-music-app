const defaultState = {
	isShow: false,
	entities: []
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'CHANGE_PLAYLIST_STATUS':
			return { ...state, isShow: payload }

		case 'UPDATE_PLAYLIST':
			return { ...state, entities: payload }

		case 'CLEAR_PLAYLIST':
			return { ...state, entities: [] }

		default:
			return state
	}
}