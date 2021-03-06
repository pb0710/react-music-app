import React, { Fragment, useState, useEffect } from 'react'
import { Container, Mask } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'
import * as api from 'api'

export default function Operation(props) {
	const dispatch = useDispatch()
	const { playlistIsShow } = useMappedState(state => ({
		playlistIsShow: state.content.playlist.isShow
	}))

	const handleRemoveMask = () => {
		dispatch({
			type: 'CHANGE_PLAYLIST_STATUS',
			payload: false
		})
	}

	return (
		<>
			<Container isShow={playlistIsShow}>
				222211111
	    </Container>
	    {playlistIsShow && <Mask onClick={handleRemoveMask} />}
    </>
	)
}