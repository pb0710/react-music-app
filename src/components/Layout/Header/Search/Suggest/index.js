import React, { useState, useEffect } from 'react'
import { Container, Search, ResultContainer, SortContainer, Item, Title } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'

export default function Suggest() {
	const { searchSuggest } = useMappedState(state => ({
		searchSuggest: state.header.search.suggest
	}))
	const { order } = searchSuggest

	const sortName = {
		albums: '专辑',
		artists: '歌手',
		mvs: 'MV',
		playlists: '歌单',
		songs: '单曲'
	}

	return (
		<Container>
			{
				order && order.map(sort => (
					<SortContainer key={sort}>
						<Title>{sortName[sort]}</Title>
						{
							searchSuggest[sort].map(item => (
								<Item key={item.id} to={`/${sort}`}>
									<span>{item.name}</span>
								</Item>
							))
						}
					</SortContainer>
				))
			}
		</Container>
	)
}