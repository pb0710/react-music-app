import React from 'react'
import { Container } from './style'
import { Spin } from 'antd'

export default function Loading() {
	return <Container>
		<Spin size="large" />
	</Container>
}
