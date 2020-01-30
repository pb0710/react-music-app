import React, {useState} from 'react'
import { Container, CountContainer, PicContainer, Pic, Open, Title } from './style'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pagesRouteMap from 'common/pagesRouteMap'

export default function SongslistCard(props) {
	const { picUrl, name, playCount, id } = props.dataSource
	const dispatch = useDispatch()

	const [hide, setHide] = useState(true)

	const handleRouteToSongslistPage = songslistId => {
		dispatch({
			type: 'CHANGE_DRAWER_SELECTED',
			payload: 'not_selected'
		})
		dispatch({
			type: 'CHANGE_SONGSLIST_ID',
			payload: songslistId
		})
	}

	const handleMouseMove = () => {
		setHide(prev => !prev)
	}

	return (
		<Container 
			to={pagesRouteMap.SONGSLIST}   
			onClick={() => handleRouteToSongslistPage(id)}
			onMouseEnter={handleMouseMove}
			onMouseLeave={handleMouseMove}
		>
			<CountContainer>
				<Icon type="customer-service" />
				<span>{Math.round(playCount/10000)}万</span>
			</CountContainer>
			<PicContainer>
				<Pic src={picUrl} alt={name} />
			</PicContainer>
			<Open type="play-circle" hide={+hide}/>
      <Title to={pagesRouteMap.SONGSLIST}>{name}</Title>
    </Container>
	)
}