import React, { Fragment, useState, useEffect } from 'react'
import { Container, Mask, PlaylistItem, SongName, Singer } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'
import * as api from 'api'

export default function Operation(props) {
	const dispatch = useDispatch()
	const { playlistIsShow, playlistContent } = useMappedState(state => ({
		playlistIsShow: state.content.playlist.isShow,
		playlistContent: state.content.playlist.entities
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
				{
					playlistContent.length > 0 && playlistContent.map(item => (
						<PlaylistItem current={item.id === playlistContent[0].id}>
							<SongName>{item.name}</SongName>
							<Singer>{item.ar[0].name}</Singer>
						</PlaylistItem>
					))
				}
	    </Container>
	    {playlistIsShow && <Mask onClick={handleRemoveMask} />}
    </>
	)
}