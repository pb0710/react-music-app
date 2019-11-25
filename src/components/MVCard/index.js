import React from 'react'
import './index.scss'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pageRouter from 'common/pageRouter'

export default function MVCard(props) {
	const { name, id, picUrl, artistName, playCount, copywriter } = props.dataSource
	const dispatch = useDispatch()

	const handleRouteToSongslist = MVId => {
		dispatch({
			type: 'CHANGE_MV_ID',
			payload: MVId
		})
	}

	return (
		<div className="mv-card-wrapper">
			<div className="playcount-wrapper">
				<Icon type="customer-service" />
				<span>{playCount}</span>
			</div>
			<div className="pic-wrapper" onClick={() => handleRouteToSongslist(id)}>
				<Link to={pageRouter.mv}>
					<Icon type="play-circle" />
					<img className="card-pic" src={picUrl} alt={name} />
				</Link>
			</div>
      <div className="desc-wrapper" onClick={() => handleRouteToSongslist(id)}>
      	<Link to={pageRouter.mv} >{name}</Link>
      	<Link to={pageRouter.singer} >{artistName}</Link>
      </div>
    </div>
	)
}