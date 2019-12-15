import React, { useState } from 'react'
import { Wrapper, PicWrapper, Pic, Desc, Play } from './style'
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
		<Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<PicWrapper to={pagesRouteMap.song} onClick={() => handleRouteToSong(id)}>
				<Pic src={picUrl} alt={name} />
			</PicWrapper>
			<Desc>
				<span>{name}</span>
				<Link to={pagesRouteMap.song}>{singerName}</Link>
			</Desc>
      <Play to={pagesRouteMap.song} hide={+!isFocus} onClick={() => handleRouteToSong(id)}>
      	<Icon type="play-circle" />
      </Play>
    </Wrapper>
	)
}