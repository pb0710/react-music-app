import React, { Fragment, useState, useEffect } from 'react'
import { Container } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'
import * as api from 'api'

export default function Operation(props) {
	const dispatch = useDispatch()
	const { isShow } = useMappedState(state => ({
		isShow: state.content.playlist.isShow
	}))

	useEffect(() => {
		
	}, [])

	return (
		<Container isShow={isShow}>
			222211111
    </Container>
	)
}