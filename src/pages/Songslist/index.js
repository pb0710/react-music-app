import React, { Fragment, useState, useEffect } from 'react'
import { Container } from './style'
import { Button, List } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link } from 'react-router-dom'
import * as api from 'api'
import SongslistHeader from '@/SongslistHeader'
import SongslistContent from '@/SongslistContent'

export default function Songslist() {
	const { listId } = useMappedState(state => ({
		listId: state.content.songslist.id
	}))
	const [songslist, setSongslist] = useState([])
	
	const getRemoteSongslist = async () => {
		try {
			const { playlist } = await api.fetchSongslistDetail({ id: listId })
			setSongslist(playlist)
			console.log('获取歌单详情成功', playlist)
		} catch (e) {
			console.error('获取歌单详情失败', e)
		}
	}

	useEffect(() => {
		getRemoteSongslist()
	}, [listId])

	return (
		<Container>
			<SongslistHeader dataSource={songslist} />
			<SongslistContent dataSource={songslist} />
		</Container>
	)
}

function DetailList(props) {
	return (
		<List.Item>
			{props.children}
		</List.Item>
	)
}