import React, { useState,useEffect } from 'react'
import { Wrapper } from './style'
import { Input, Button, List } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import Search from '@/Search'

export default function Header() {

	return (
		<Wrapper>
			<Search />
		</Wrapper>
	)
}