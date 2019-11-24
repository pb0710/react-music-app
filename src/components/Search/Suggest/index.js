import React, { useState, useEffect } from 'react'
import { Wrapper, Search, ResultWrapper, SortWrapper, Item, Title } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import {Link} from 'react-router-dom'

export default function Suggest() {
	const { searchSuggest } = useMappedState(state => ({
		searchSuggest: state.header.searchSuggest
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
		<Wrapper>
			{
				order && order.map(sort => (
					<SortWrapper key={sort}>
						<Title>{sortName[sort]}</Title>
						{
							searchSuggest[sort].map(item => (
								<Item key={item.id}>
									<Link to={`/${sort}`}>
										{item.name}
									</Link>
								</Item>
							))
						}
					</SortWrapper>
				))
			}
		</Wrapper>
	)
}