import React from 'react'
import './index.scss'
import { Icon, Button } from 'antd'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pageRouter from 'common/pageRouter'

export default function SongslistTitle(props) {
	const dispatch = useDispatch()

	if (props.dataSource.length === 0) return null
	const { coverImgUrl, name, description, playCount, tracks, creator: { avatarUrl, nickname, userId } } = props.dataSource

	const handleRouteToUser = userId => {
		dispatch({
			type: 'CHANGE_USER_ID',
			payload: userId
		})
	}

	return (
		<div className="list-title-wrapper">
			<img className="left-wrapper" src={coverImgUrl} alt="name"/>
			<div className="right-wrapper">
				<span>{name}</span>
				<Link className="user-wrapper" to='/page/user' onClick={() => handleRouteToUser(userId)}>
					<img src={avatarUrl} alt={nickname}/>
					<span>{nickname}</span>
				</Link>
				<span>播放次数：{playCount}</span>
				<span>歌曲数目：{tracks.length}</span>
				<span>简介：{description}</span>
				<div className="operation-wrapper">
					<Button type="primary">播放全部</Button>
					<Button>收藏歌单</Button>
					<Button>下载全部</Button>
				</div>
			</div>
		</div>
	)
}