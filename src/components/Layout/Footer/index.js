import React, { useState } from 'react'
import { Wrapper } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import Playing from './Playing'
import Control from './Control'
import Operation from './Operation'

export default function Footer() {
	return (
		<Wrapper>
			<Playing />
			<Control />
			<Operation />
    </Wrapper>
	)
}