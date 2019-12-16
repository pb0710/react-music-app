import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Sider from './Sider'
import Footer from './Footer'
import { Container, BodyContainer } from './style'

export default function Layout() {
	return (
		<Container>
			<Header />
			<BodyContainer>
				<Sider />
				<Content />
			</BodyContainer>
			<Footer />
		</Container>
	)
}