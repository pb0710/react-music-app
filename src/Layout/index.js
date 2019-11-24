import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import {Wrapper} from './style'

export default function Layout() {
	return (
		<Wrapper>
			<Header />
			<Content />
		</Wrapper>
	)
}