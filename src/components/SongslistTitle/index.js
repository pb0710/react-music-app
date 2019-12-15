import React from 'react'
import { Wrapper, Pic, DescWrapper, UserWrapper, Avatar, BtnWrapper, PlayAll, CollectAll, DownloadAll } from './style'
import { Icon, Button } from 'antd'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pagesRouteMap from 'common/pagesRouteMap'

export default function SongslistTitle(props) {
	const dispatch = useDispatch()

	if (props.dataSource.length === 0) return null
	const { coverImgUrl, name, description, playCount, tracks, creator: { avatarUrl, nickname, userId } } = props.dataSource

	return (
		<Wrapper>
			<Pic src={coverImgUrl} alt="name"/>
			<DescWrapper >
				<span>{name}</span>
				<UserWrapper to='/page/user'>
					<Avatar src={avatarUrl} alt={nickname}/>
					<span>{nickname}</span>
				</UserWrapper>
				<span>播放次数：{playCount}</span>
				<span>歌曲数目：{tracks.length}</span>
				<span>简介：{description}</span>
				<BtnWrapper>
					<PlayAll type="primary">播放全部</PlayAll>
					<CollectAll>收藏歌单</CollectAll>
					<DownloadAll>下载全部</DownloadAll>
				</BtnWrapper>
			</DescWrapper>
		</Wrapper>
	)
}