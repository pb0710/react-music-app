import React, { Component } from 'react'
import Header from 'layout/Header'
import Content from 'layout/Content'
import Sider from 'layout/Sider'
import Footer from 'layout/Footer'
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