import React from 'react'
import { Container, CountContainer, PicContainer, PlayIcon, Pic, DescContainer } from './style'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pagesRouteMap from 'common/pagesRouteMap'

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
		<Container>
			<CountContainer>
				<Icon type="customer-service" />
				<span>{playCount}</span>
			</CountContainer>
			<PicContainer to={pagesRouteMap.MV} onClick={() => handleRouteToSongslist(id)}>
				<PlayIcon type="play-circle" />
				<Pic src={picUrl} alt={name} />
			</PicContainer>
      <DescContainer onClick={() => handleRouteToSongslist(id)}>
      	<Link to={pagesRouteMap.MV} >{name}</Link>
      	<Link to={pagesRouteMap.SINGER} >{artistName}</Link>
      </DescContainer>
    </Container>
	)
}