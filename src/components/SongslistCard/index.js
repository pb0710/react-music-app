import React from 'react'
import './index.scss'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pageRouter from 'common/pageRouter'

export default function SongslistCard(props) {
	const { picUrl, name, playCount, id } = props.dataSource
	const dispatch = useDispatch()

	const handleRouteToSongslist = songslistId => {
		dispatch({
			type: 'CHANGE_PLAYLIST_ID',
			payload: songslistId
		})
	}

	return (
		<Link 
			to={pageRouter.songslist}  
			className="songslist-card-wrapper" 
			onClick={() => handleRouteToSongslist(id)}
		>
			<div className="playcount-wrapper">
				<Icon type="customer-service" />
				<span>{Math.round(playCount/10000)}万</span>
			</div>
			<div className="pic-wrapper">
				<img className="card-pic" src={picUrl} alt={name} />
			</div>
			<Icon className="enter-wrapper" type="play-circle" />
      <span className="desc" to={pageRouter.songslist}>{name}</span>
    </Link>
	)
}