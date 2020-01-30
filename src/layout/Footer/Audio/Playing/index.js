import React, { useState, useEffect, useMemo } from 'react'
import { Container, Pic, DescContainer, Title, Duration } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import { timeFormat } from 'utils'

export default function Playing(props) {
	const { audioRef } = props
	const dispatch = useDispatch()
	const { playlistContent, playingId } = useMappedState(state => ({
		playlistContent: state.playlist.entities,
		playingId: state.audio.playingId
	}))

	let durationTimer

	const [currentTime, setCurrentTime] = useState('00:00') 

	const currentPlayingMusicDetail = useMemo(() => {

		for (let item of playlistContent) {

			if (item.id === playingId)
				return item
		}
	}, [playingId])

	useEffect(() => {
		if (playingId) {
			durationTimer = setInterval(() => {
				setCurrentTime(timeFormat(audioRef.current.currentTime))
			}, 1000)
		}
		return () => {
			clearTimeout(durationTimer)
		}
	})

	return (
		<Container>
			{
				currentPlayingMusicDetail && 
					<>
						<Pic 
							src={currentPlayingMusicDetail?.al?.picUrl} 
							alt={currentPlayingMusicDetail.name} 
						/>
						<DescContainer>
							<Title>
								<span>{currentPlayingMusicDetail.name}</span>
								<Link to="/page/singer">
									{' - ' + currentPlayingMusicDetail.ar[0].name}
								</Link>
							</Title>
							<Duration>
								{`${currentTime} / ${timeFormat(currentPlayingMusicDetail.dt / 1000)}`}
							</Duration>
						</DescContainer>
					</>
			}
    </Container>
	)
}