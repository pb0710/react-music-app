import React, { Component } from 'react'
import { Wrapper } from './style'
import { Route, Switch } from 'react-router-dom'

export default function Content() {
	return (
		<Wrapper>
			<Switch>
				<Route />
			</Switch>
		</Wrapper>
	)
}