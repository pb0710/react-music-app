import React, { Refs, useState, useEffect } from 'react'
import { useMappedState, useDispatch } from 'redux-react-hook'

import Playing from './Playing'
import Control from './Control'
import Operation from './Operation'
import ProgressBar from './ProgressBar'

export default function Audio() {
	const audioRef = React.createRef()

	const dispatch = useDispatch()
	const { playingId, audioDetail } = useMappedState(state => ({
		playingId: state.audio.playingId,
		audioDetail: state.audio.audioDetail
	}))

	return <>
		{
			audioDetail.id === playingId && <audio 
				key={audioDetail.id} 
				ref={audioRef} 
				src={audioDetail.url} 
				autoPlay={true} 
			/>
		}
		<ProgressBar audioRef={audioRef}></ProgressBar>
		<Playing audioRef={audioRef} />
		<Control audioRef={audioRef} />
		<Operation />
	</>
}