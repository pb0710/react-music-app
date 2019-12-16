import React, { useState } from 'react'
import { Container } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import Drawer from './Drawer'

export default function Sider() {
	return (
		<Container>
      <Drawer/>
    </Container>
	)
}