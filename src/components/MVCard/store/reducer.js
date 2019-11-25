const defaultState = {
	listId: '0'
}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case 'CHANGE_PLAYLIST_ID':
			console.log('listId', payload)
			return { ...state, listId: payload }
		default:
			return state
	}
}