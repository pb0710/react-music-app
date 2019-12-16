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
		case 'CLEAR_SEARCH_RESULT':
			return { ...state, suggest: null }
		default:
			return state
	}
}