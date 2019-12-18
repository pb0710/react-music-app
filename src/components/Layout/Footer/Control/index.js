import React, { Refs, useState, useEffect } from 'react'
import { Container, PlayContainer, Pause, Play, Previous, Next, Love, Volume } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'
import * as api from 'api'

export default function Control() {
	const audioRef = React.createRef()

	const dispatch = useDispatch()
	const { playlistContent, playingId } = useMappedState(state => ({
		playlistContent: state.content.playlist.entities,
		playingId: state.footer.playing.id
	}))

	const [musicURL, setMusicURL] = useState([])
	const [isPlaying, setIsPlaying] = useState(false)

	// 音乐detail里面没有url，只能通过ID从接口获取
	const getPlayingMusic = async () => {
		try {
			const { data } = await api.fetchSongsUrl(playingId)
			setMusicURL(data[0])
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
				musicURL.id === playingId && <audio key={musicURL.id} ref={audioRef} autoPlay={true} src={musicURL.url} />
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