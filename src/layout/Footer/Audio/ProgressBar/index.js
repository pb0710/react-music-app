import React, { useState, useEffect } from 'react'
import { Container } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Progress } from 'antd'

export default function ProgressBar(props) {
	const { audioRef } = props
	const dispatch = useDispatch()
	const { playingId } = useMappedState(state => ({
		playingId: state.audio.playingId
	}))
	const [timePercent, setTimePercent] = useState(0) 
	let durationTimer

	useEffect(() => {
		if (playingId) {
			durationTimer = setInterval(() => {
				const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100
				setTimePercent(percent)
			}, 1000)
		}
		return () => {
			clearTimeout(durationTimer)
		}
	})

	const handlePlay = () => {
		if (playingId) {
			dispatch({
				type: 'UPDATE_PLAYING_STATUS',
				payload: true
			})
			audioRef.current.play()
		}
	}

	const handleChangeCurrentPlayTo = e => {
		if (audioRef.current) {
			const pageWidth = window.innerWidth
			const pointX = e.pageX
			const progressPercent = pointX / pageWidth
			setTimePercent(progressPercent * 100)
			audioRef.current.currentTime = audioRef?.current?.duration * progressPercent
			handlePlay()
		}
	}

	return (
		<Container onClick={e => handleChangeCurrentPlayTo(e)} active={audioRef.current}>
			<Progress 
				strokeWidth={3} 
				showInfo={false} 
				status="active" 
				percent={timePercent} 
			/>
		</Container>
	)
}