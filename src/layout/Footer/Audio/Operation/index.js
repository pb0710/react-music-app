import React, { Fragment, useState } from 'react'
import { Container, PlaylistBtn, PlayOrderBtn } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'
import * as api from 'api'

export default function Operation() {
	const dispatch = useDispatch()
	const { playlistIsShow } = useMappedState(state => ({
		playlistIsShow: state.playlist.isShow
	}))

	const [songsURL, setSongsURL] = useState([])

	const handleChangePlaylistStatus = () => {
		dispatch({
			type: 'CHANGE_PLAYLIST_STATUS',
			payload: !playlistIsShow
		})
	}

	return (
		<Container>
			<PlayOrderBtn type="retweet" />
			<PlaylistBtn type="menu" onClick={handleChangePlaylistStatus} />
    </Container>
	)
}