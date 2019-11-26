import React from 'react'
import { Wrapper, CountWrapper, PicWrapper, Pic, Open, Title } from './style'
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
		<Wrapper 
			to={pageRouter.songslist}   
			onClick={() => handleRouteToSongslist(id)}
		>
			<CountWrapper>
				<Icon type="customer-service" />
				<span>{Math.round(playCount/10000)}万</span>
			</CountWrapper>
			<PicWrapper>
				<Pic src={picUrl} alt={name} />
			</PicWrapper>
			<Open type="play-circle" />
      <Title to={pageRouter.songslist}>{name}</Title>
    </Wrapper>
	)
}