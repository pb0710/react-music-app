import React, { Suspense } from 'react'
import { Container } from './style'
import { Route, Switch } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import Playlist from './Playlist'
import Recommend from 'pages/Recommend'
import Songslist from 'pages/Songslist'

export default function Content() {
	return (
		<Container>
			<Switch>
				<Route path="/page/find_music/recommend" component={Recommend} />
				<Route path="/page/songslist" component={Songslist}/>
			</Switch>
			<Playlist />
		</Container>
	)
}