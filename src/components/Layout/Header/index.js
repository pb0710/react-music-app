import React, { useState,useEffect } from 'react'
import { Container } from './style'
import { Input, Button, List } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import Search from './Search'
import Nav from './Nav'

export default function Header() {

	return (
		<Container>
			<Nav />
			<Search />
		</Container>
	)
}