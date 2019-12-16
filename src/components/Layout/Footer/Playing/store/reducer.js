const defaultState = {
	id: 0
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'PLAY_MUSIC':
			console.log('id', payload)
			return { ...state, id: payload }
		default:
			return state
	}
}