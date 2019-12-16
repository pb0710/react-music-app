const defaultState = {
	id: 11111111
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'CHANGE_SONGSLIST_ID':
			console.log('id', payload)
			return { ...state, id: payload }
		default:
			return state
	}
}