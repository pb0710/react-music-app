import React, { Fragment, useState, useEffect } from 'react'
import { Wrapper } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import routeMap from 'common/routeMap'
import * as api from 'api'

export default function Operation(props) {
	const dispatch = useDispatch()
	const { isShow } = useMappedState(state => ({
		isShow: state.content.playlist.isShow
	}))

	useEffect(() => {
		
	}, [])

	return (
		<Wrapper isShow={isShow}>
			222211111
    </Wrapper>
	)
}