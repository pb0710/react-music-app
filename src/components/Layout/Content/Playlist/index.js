import React, { useState, useEffect } from 'react'
import { Container, PlaylistHeader, RemoveAllMusic, CollectAllMusic, Total, PlaylistContent, Mask, PlaylistItem, SongName, Singer } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'
import * as api from 'api'

export default function Operation(props) {
	const dispatch = useDispatch()
	const { isPlaylistShow, playlistContent } = useMappedState(state => ({
		isPlaylistShow: state.content.playlist.isShow,
		playlistContent: state.content.playlist.entities
	}))

	const handleRemoveMask = () => {
		dispatch({
			type: 'CHANGE_PLAYLIST_STATUS',
			payload: false
		})
	}

	const handleRemoveAllMusic = () => {
		dispatch({
			type: 'CLEAR_PLAYLIST'
		})

		dispatch({
			type: 'CHANGE_PLAYLIST_STATUS',
			payload: false
		})
	}

	const handlePlayMusic = id => {
		dispatch({
			type: 'UPDATE_PLAYING_ID',
			payload: id
		})
	}

	return (
		<>
			<Container isShow={isPlaylistShow}>
				<PlaylistHeader>
					<Total>总共：<span>{playlistContent.length}</span> 首</Total>
					<CollectAllMusic type="plus-square" />
					<RemoveAllMusic type="delete" onClick={handleRemoveAllMusic} />
				</PlaylistHeader>
				<PlaylistContent>
					{
						playlistContent.length > 0 && playlistContent.map(item => (
							<PlaylistItem 
								key={item.id}
								current={item.id === playlistContent[0].id}
								onClick={() => handlePlayMusic(item.id)}
							>
								<SongName>{item.name}</SongName>
								<Singer>{item.ar[0].name}</Singer>
							</PlaylistItem>
						))
					}
				</PlaylistContent>
	    </Container>
	    {isPlaylistShow && <Mask onClick={handleRemoveMask} />}
    </>
	)
}