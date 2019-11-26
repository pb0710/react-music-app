const defaultState = {
	selected: 'find_music'
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'CHANGE_DRAWER_SELECTED':
			console.log('selected', payload)
			return { ...state, selected: payload }
		default:
			return state
	}
}