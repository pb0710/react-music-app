import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Sider from './Sider'
import Footer from './Footer'
import {Wrapper,BodyWrapper} from './style'

export default function Layout() {
	return (
		<Wrapper>
			<Header />
			<BodyWrapper>
				<Sider />
				<Content />
			</BodyWrapper>
			<Footer />
		</Wrapper>
	)
}