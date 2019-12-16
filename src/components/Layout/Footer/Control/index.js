import React, { Refs, useState, useEffect } from 'react'
import { Container, PlayContainer, Pause, Play, Previous, Next, Love, Volume } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'
import * as api from 'api'

export default function Control() {
	const audioRef = React.createRef()

	const dispatch = useDispatch()
	const { songId } = useMappedState(state => ({
		songId: state.footer.playing.id
	}))
	const [songsURL, setSongsURL] = useState([])
	const [isPlaying, setIsPlaying] = useState(false)

	const getPlayingMusic = async () => {

		try {
			const { data } = await api.fetchSongsUrl(songId)
			setSongsURL(data)
			console.log('获取歌曲URL成功', data)
		} catch (e) {
			console.error('获取歌曲URL失败', e);
		}
	}

	useEffect(() => {
		getPlayingMusic()
		songId && setIsPlaying(true)
	}, [songId])

	const handlePause = () => {
		console.log(audioRef)
		setIsPlaying(false)
		audioRef.current.pause()
	}

	const handlePlay = () => {
		console.log(audioRef)
		setIsPlaying(true)
		audioRef.current.play()
	}

	return (
		<Container>
			{
				songsURL.map(item => item.id === songId && (
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