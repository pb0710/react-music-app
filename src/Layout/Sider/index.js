import React, { useState } from 'react'
import './index.scss'
import { useMappedState, useDispatch } from 'redux-react-hook'
import Drawer from '@/Drawer'

export default function Sider() {
	return (
		<div className="sider-wrapper">
      <Drawer/>
    </div>
	)
}