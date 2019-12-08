import React, { Fragment, useState, useEffect } from 'react'
import { Wrapper, PlaylistBtn, PlayOrderBtn } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import routeMap from 'common/routeMap'
import * as api from 'api'

export default function Operation() {
	const dispatch = useDispatch()
	const { isPlaylistShow } = useMappedState(state => ({
		isPlaylistShow: state.content.playlist.isShow
	}))

	const [songsURL, setSongsURL] = useState([])

	useEffect(() => {
		
	}, [])

	const handleChangePlaylistStatus = () => {
		dispatch({
			type: 'CHANGE_PLAYLIST_STATUS',
			payload: !isPlaylistShow
		})
	}

	return (
		<Wrapper>
			<PlayOrderBtn type="retweet" />
			<PlaylistBtn type="menu" onClick={handleChangePlaylistStatus} />
    </Wrapper>
	)
}