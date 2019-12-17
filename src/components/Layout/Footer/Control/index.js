import React, { Refs, useState, useEffect } from 'react'
import { Container, PlayContainer, Pause, Play, Previous, Next, Love, Volume } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'
import * as api from 'api'

export default function Control() {
	const audioRef = React.createRef()

	const dispatch = useDispatch()
	const { playlistContent } = useMappedState(state => ({
		playlistContent: state.content.playlist.entities
	}))

	// 播放列表第一首歌为当前	正在播放的歌曲
	const playingId = playlistContent[0] && playlistContent[0].id

	const [songsURL, setSongsURL] = useState([])
	const [isPlaying, setIsPlaying] = useState(false)

	const getPlayingMusic = async () => {

		try {
			const { data } = await api.fetchSongsUrl(playingId)
			setSongsURL(data)
			console.log('获取歌曲URL成功', data)
		} catch (e) {
			console.error('获取歌曲URL失败', e);
		}
	}

	useEffect(() => {
		getPlayingMusic()
		playingId && setIsPlaying(true)
	}, [playingId])

	const handlePause = () => {
		setIsPlaying(false)
		audioRef.current.pause()
	}

	const handlePlay = () => {
		setIsPlaying(true)
		audioRef.current.play()
	}

	return (
		<Container>
			{
				songsURL.map(item => item.id === playingId && (
					<>
						<audio ref={audioRef} src={item.url} autoPlay={true}></audio>
					</>
				))
			}
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