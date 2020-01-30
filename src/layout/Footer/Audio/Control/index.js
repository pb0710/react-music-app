import React, { useState, useEffect } from 'react'
import { Container, PlayContainer, Pause, Play, Previous, Next, Love, Volume } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'

export default function Control(props) {
	const { audioRef } = props

	const dispatch = useDispatch()
	const { playingId, isPlaying } = useMappedState(state => ({
		playingId: state.audio.playingId,
		isPlaying: state.audio.isPlaying
	}))

	function fetchAudioDetail(playingId) {
		dispatch({
			type: 'FETCH_AUDIO_DETAIL',
			payload: playingId
		})
	}

	const handlePause = () => {
		if (playingId) {
			dispatch({
				type: 'UPDATE_PLAYING_STATUS',
				payload: false
			})
			console.log('ref', audioRef.current.currentTime)
			audioRef.current.pause()
		}
	}

	const handlePlay = () => {
		if (playingId) {
			dispatch({
				type: 'UPDATE_PLAYING_STATUS',
				payload: true
			})
			// audioRef.current.volume = 0.2
			audioRef.current.play()
		}
	}

	useEffect(() => {
		playingId && fetchAudioDetail(playingId)
	}, [playingId])

	return (
		<Container>
			<Love type="heart" />
			<PlayContainer>
				<Previous type="icon-shangyishou" />
				{
					isPlaying 
						? <Pause type="icon-zanting" onClick={handlePause} /> 
						: <Play type="icon-bofang1" onClick={handlePlay} />
				}
				<Next type="icon-xiayishou" />
			</PlayContainer>
			<Volume type="sound" />
    </Container>
	)
}