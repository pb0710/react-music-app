import React from 'react'
import { Wrapper, PicWrapper, Pic, Desc, Play } from './style'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pageRouter from 'common/pageRouter'

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

	const handleRouteToSong = songId => {
		dispatch({
			type: 'CHANGE_SONG_ID',
			payload: songId
		})
	}

	return (
		<Wrapper>
			<PicWrapper to={pageRouter.song} onClick={() => handleRouteToSong(id)}>
				<Pic src={picUrl} alt={name} />
			</PicWrapper>
			<Desc>
				<span>{name}</span>
				<Link to={pageRouter.song}>{singerName}</Link>
			</Desc>
      <Play to={pageRouter.song} onClick={() => handleRouteToSong(id)}>
      	<Icon type="play-circle" />
      </Play>
    </Wrapper>
	)
}