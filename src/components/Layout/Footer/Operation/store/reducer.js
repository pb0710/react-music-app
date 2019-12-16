const defaultState = {

}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case '6666':
			console.log('id', payload)
			return { ...state, id: payload }
		default:
			return state
	}
}