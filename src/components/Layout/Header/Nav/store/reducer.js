const defaultState = {
	
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'TEST':
			return { ...state, test: payload }
		default:
			return state
	}
}