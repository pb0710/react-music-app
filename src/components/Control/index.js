import React, { Fragment, useState, useEffect } from 'react'
import './index.scss'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import routeMap from 'common/routeMap'
import * as api from 'api'

export default function Control() {
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
		<div className="operation-wrapper">
			{
				songsURL.map(item => item.id === songId && (
					<Fragment key={item.id}>
						<audio src={item.url} autoPlay={true}></audio>
					</Fragment>
				))
			}
    </div>
	)
}