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

	const handleRouteToSongslist = songslistId => {
		dispatch({
			type: 'CHANGE_SONGSLIST_ID',
			payload: songslistId
		})
	}

	const handleMouseEnter = () => {
		setHide(false)
	}

	const handleMouseLeave = () => {
		setHide(true)
	}

	return (
		<Container 
			to={pagesRouteMap.songslist}   
			onClick={() => handleRouteToSongslist(id)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<CountContainer>
				<Icon type="customer-service" />
				<span>{Math.round(playCount/10000)}万</span>
			</CountContainer>
			<PicContainer>
				<Pic src={picUrl} alt={name} />
			</PicContainer>
			<Open type="play-circle" hide={+hide}/>
      <Title to={pagesRouteMap.songslist}>{name}</Title>
    </Container>
	)
}