import React, { Fragment, useState, useEffect } from 'react'
import {Wrapper } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import routeMap from 'common/routeMap'
import * as api from 'api'

export default function Operation() {
	const dispatch = useDispatch()
	const { songId } = useMappedState(state => ({
		songId: state.footer.playing.id
	}))

	const [songsURL, setSongsURL] = useState([])

	const getPlayingMusic = async () => {

		try {
			const { data } = await api.fetchSongsUrl(songId)
			setSongsURL(data)
			console.log('获取歌曲URL成功', data)
		} catch (e) {
			console.error('获取歌曲URL成功', e);
		}
	}

	useEffect(() => {
		getPlayingMusic()
	}, [songId])

	return (
		<Wrapper>
			{
				songsURL.map(item => item.id === songId && (
					<>
					</>
				))
			}
    </Wrapper>
	)
}