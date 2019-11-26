import React, { useState } from 'react'
import { Wrapper } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import Drawer from '@/Drawer'

export default function Sider() {
	return (
		<Wrapper>
      <Drawer/>
    </Wrapper>
	)
}