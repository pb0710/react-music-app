import React, { Component } from 'react'
import { Wrapper } from './style'
import { Route, Switch } from 'react-router-dom'
import Recommend from './Recommend'
import Songslist from './Songslist'

export default function Content() {
	return (
		<Wrapper>
			<Switch>
				<Route path="/page/find_music/recommend" component={Recommend} />
				<Route path="/page/songslist" component={Songslist}/>
			</Switch>
		</Wrapper>
	)
}