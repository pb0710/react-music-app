import React, { useState, useEffect } from 'react'
import { Container, Title,TagContainer, Tag } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import * as api from 'api'
import {Button} from 'antd'

export default function Hot(props) {
	const { searchSuggest } = useMappedState(state => ({
		searchSuggest: state.header.searchSuggest
	}))
	const { order } = searchSuggest
	const dispatch = useDispatch()

	const [hots, setHots] = useState([])

	const getHotSearch = async () => {
		const { result: {hots} } = await api.fetchHotSearch()
		setHots(hots)
	}

	useEffect(() => {
		getHotSearch()
	}, [])

	return (
		<Container>
			<Title>热门搜索</Title>
			<TagContainer>
				{
					hots.map(hot => <Tag key={hot.first} onClick={() => props.handleClickTag(hot.first)}>{hot.first}</Tag>)
				}
			</TagContainer>
		</Container>
	)
}