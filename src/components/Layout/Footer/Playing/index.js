import React, { Fragment, useState, useEffect } from 'react'
import { Container, Pic, DescContainer, Title, Duration } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'
import * as api from 'api'

export default function Playing() {
	const dispatch = useDispatch()
	const { playlistContent } = useMappedState(state => ({
		playlistContent: state.content.playlist.entities
	}))

	// 播放列表第一首歌为当前	正在播放的歌曲
	const playingMusicDetail = playlistContent[0]
	const playingId = playingMusicDetail && playingMusicDetail.id

	return (
		<Container>
			{
				playingMusicDetail &&
					<>
						<Pic src={playingMusicDetail.al.picUrl} alt={playingMusicDetail.name} />
						<DescContainer>
							<Title >
								<span>{playingMusicDetail.name}</span>
								<Link to="/page/singer">{' - ' + playingMusicDetail.ar[0].name}</Link>
							</Title>
							<Duration>{`${'01:23'} / ${'03:45'}`}</Duration>
						</DescContainer>
					</>
			}
    </Container>
	)
}