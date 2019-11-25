const defaultState = {
	userId: '0'
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'CHANGE_USER_ID':
			console.log('userId', payload)
			return { ...state, userId: payload }
		default:
			return state
	}
}