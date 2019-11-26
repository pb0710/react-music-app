import React from 'react'
import { Wrapper, CountWrapper, PicWrapper, Pic, DescWrapper } from './style'
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
		<Wrapper>
			<CountWrapper>
				<Icon type="customer-service" />
				<span>{playCount}</span>
			</CountWrapper>
			<PicWrapper  onClick={() => handleRouteToSongslist(id)}>
				<Link to={pageRouter.mv}>
					<Icon type="play-circle" />
					<Pic src={picUrl} alt={name} />
				</Link>
			</PicWrapper>
      <DescWrapper onClick={() => handleRouteToSongslist(id)}>
      	<Link to={pageRouter.mv} >{name}</Link>
      	<Link to={pageRouter.singer} >{artistName}</Link>
      </DescWrapper>
    </Wrapper>
	)
}