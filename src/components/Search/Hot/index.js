import React, { useState, useEffect } from 'react'
import { Wrapper, Title,TagWrapper, Tag } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import * as api from 'api'

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
		<Wrapper>
			<Title>热门搜索</Title>
			<TagWrapper>
				{
					hots.map(hot => <Tag key={hot.first} onClick={() => props.handleClickTag(hot.first)}>{hot.first}</Tag>)
				}
			</TagWrapper>
		</Wrapper>
	)
}