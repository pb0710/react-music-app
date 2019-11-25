import React, { useState } from 'react'
import './index.scss'
import { useMappedState, useDispatch } from 'redux-react-hook'
import Playing from '@/Playing'
import Control from '@/Control'
import Operation from '@/Operation'

export default function Footer() {
	return (
		<div className="footer-wrapper">
			<Playing />
			<Control />
			<Operation />
    </div>
	)
}