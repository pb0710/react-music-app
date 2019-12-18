import React from 'react'
import { Container, Pic, DescContainer, UserContainer, Avatar, BtnContainer, PlayAll, CollectAll, DownloadAll } from './style'
import { Icon, Button } from 'antd'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pagesRouteMap from 'common/pagesRouteMap'

export default function SongslistHeader(props) {
	const dispatch = useDispatch()
	
	if (props.dataSource.length === 0) return null
	const { coverImgUrl, name, description, playCount, tracks, creator: { avatarUrl, nickname, userId } } = props.dataSource
	
	// 获取歌单里所有音乐的id
	const songsIdFromSonglist = tracks.map(item => item.id)
	
	const handlePlayAllMusic = () => {

		dispatch({
			type: 'ADD_MUSIC_TO_PLAYLIST',
			payload: tracks
		})
	}

	return (
		<Container>
			<Pic src={coverImgUrl} alt="name" />
			<DescContainer>
				<span>{name}</span>
				<UserContainer to='/page/user'>
					<Avatar src={avatarUrl} alt={nickname} />
					<span>{nickname}</span>
				</UserContainer>
				<span>播放次数：{playCount}</span>
				<span>歌曲数目：{tracks.length}</span>
				<span>简介：{description}</span>
				<BtnContainer>
					<PlayAll type="primary" onClick={handlePlayAllMusic}>播放全部</PlayAll>
					<CollectAll>收藏歌单</CollectAll>
					<DownloadAll>下载全部</DownloadAll>
				</BtnContainer>
			</DescContainer>
		</Container>
	)
}