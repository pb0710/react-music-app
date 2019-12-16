import React, { useState } from 'react'
import { Container } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import Playing from './Playing'
import Control from './Control'
import Operation from './Operation'

export default function Footer() {
	return (
		<Container>
			<Playing />
			<Control />
			<Operation />
    </Container>
	)
}