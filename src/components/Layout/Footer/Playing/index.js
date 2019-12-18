import React, { Fragment, useState, useEffect, useMemo } from 'react'
import { Container, Pic, DescContainer, Title, Duration } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'
import * as api from 'api'

export default function Playing() {
	const dispatch = useDispatch()
	const { playlistContent, playingId } = useMappedState(state => ({
		playlistContent: state.content.playlist.entities,
		playingId: state.footer.playing.id
	}))

	const currentPlayingMusicDetail = useMemo(() => {
		
		for (let item of playlistContent) {
			if (item.id === playingId) return item
		}
	}, [playingId])

	return (
		<Container>
			{console.log('currentPlayingMusicDetail', currentPlayingMusicDetail)}
			{
				currentPlayingMusicDetail && 
					<>
						<Pic src={currentPlayingMusicDetail.al.picUrl} alt={currentPlayingMusicDetail.name} />
						<DescContainer>
							<Title>
								<span>{currentPlayingMusicDetail.name}</span>
								<Link to="/page/singer">{' - ' + currentPlayingMusicDetail.ar[0].name}</Link>
							</Title>
							<Duration>{`${'01:23'} / ${'03:45'}`}</Duration>
						</DescContainer>
					</>
			}
    </Container>
	)
}