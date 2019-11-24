const defaultState = {
	
}

export default (state = defaultState, action) => {
	const {type, payload} = action
	switch (type) {
		case 'SEARCH1111':
			return {...state, searchKeyword: payload}
		default:
			// statements_def
			break;
	}
	return state
}