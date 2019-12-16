const defaultState = {
	keywords: '',
	suggest: {}
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'SEARCH':
			return { ...state, keywords: payload }
		case 'SAVE_SEARCH_RESULT':
			return { ...state, suggest: payload }
		default:
			return state
	}
}