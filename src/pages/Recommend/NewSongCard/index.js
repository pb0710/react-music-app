import React, { useState } from 'react'
import { Container, PicContainer, Pic, Desc, Play } from './style'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pagesRouteMap from 'common/pagesRouteMap'

export default function SongslistCard(props) {
	const {
		name,
		id,
		song: {
			album: { picUrl },
			artists: [{
				name: singerName
			}]
		}
	} = props.dataSource

	const dispatch = useDispatch()
	const [isFocus, setIsFocus] = useState(false)

	const handleRouteToSong = songId => {
		dispatch({
			type: 'CHANGE_SONG_ID',
			payload: songId
		})
	}

	const handleMouseEnter = () => {
		setIsFocus(true)
	}
	const handleMouseLeave = () => {
		setIsFocus(false)
	}
	
	return (
		<Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<PicContainer to={pagesRouteMap.SONG} onClick={() => handleRouteToSong(id)}>
				<Pic src={picUrl} alt={name} />
			</PicContainer>
			<Desc>
				<span>{name}</span>
				<Link to={pagesRouteMap.SONG}>{singerName}</Link>
			</Desc>
      <Play to={pagesRouteMap.SONG} hide={+!isFocus} onClick={() => handleRouteToSong(id)}>
      	<Icon type="play-circle" />
      </Play>
    </Container>
	)
}