const defaultState = {
	id: 0
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'UPDATE_PLAYING_ID':
			return { ...state, id: payload }
		default:
			return state
	}
}