import React, { Fragment, useState, useEffect } from 'react'
import './index.scss'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import routeMap from 'common/routeMap'
import * as api from 'api'

export default function Playing() {
	const dispatch = useDispatch()
	const { songId } = useMappedState(state => ({
		songId: state.footer.playing.id
	}))

	const [songsURL, setSongsURL] = useState([])
	const [songsDetail, setSongsDetail] = useState([])

	const getPlayingMusic = async () => {

		try {
			const { songs } = await api.fetchSongsDetail(songId)
			setSongsDetail(songs)
			console.log('获取歌曲详情成功', songs)
		} catch (e) {
			console.error('获取歌曲详情成功', e);
		}

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
		<div className="playing-wrapper">
			{
				songsDetail.map(item => item.id === songId && (
					<Fragment key={item.id}>
						<img className="songPic" src={item.al.picUrl} alt={item.name} />
						<div className="right-wrapper">
							<div className="desc">
								<span>{item.name}</span>
								<Link to="/page/singer">{' - ' + item.ar[0].name}</Link>
							</div>
							<span className="duration">{`${'01:23'} / ${'03:45'}`}</span>
						</div>
					</Fragment>
				))
			}
    </div>
	)
}