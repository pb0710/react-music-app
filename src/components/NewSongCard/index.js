import React from 'react'
import './index.scss'
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
		<div className="newsong-card-wrapper">
			<Link to={pageRouter.song} className="pic-wrapper" onClick={() => handleRouteToSong(id)}>
				<img className="card-pic" src={picUrl} alt={name} />
			</Link>
			<div className="desc-wrapper">
				<span>{name}</span>
				<Link to={pageRouter.song}>{singerName}</Link>
			</div>
      <Link className="play-wrapper" to={pageRouter.song} onClick={() => handleRouteToSong(id)}>
      	<Icon type="play-circle" />
      </Link>
    </div>
	)
}