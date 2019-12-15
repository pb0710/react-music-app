const defaultState = {
	searchKeywords: '',
	searchSuggest: {}
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'SEARCH':
			return { ...state, searchKeywords: payload }
		case 'SAVE_SEARCH_RESULT':
			return { ...state, searchSuggest: payload }
		default:
			// statements_def
			break;
	}
	return state
}