import React, { Suspense, useState, useMemo } from 'react'
import { Container } from './style'
import { Button, List } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import * as api from 'api'
import { wrapToSuspense } from 'utils'

import Loading from '@/Loading'
import SongslistHeader from './SongslistHeader'
import SongslistContent from './SongslistContent'

export default function Songslist() {
	const { songslistId } = useMappedState(state => ({
		songslistId: state.page.songslist.id
	}))

	const fetchSongslistData = () => wrapToSuspense(api.fetchSongslistDetail({ id: songslistId }))
	const resource = useMemo(() => fetchSongslistData(), [])

	return (
		<Suspense fallback={<Loading size="large" />}>
			<Container>
				<SongslistHeader resource={resource} />
				<SongslistContent resource={resource} />
			</Container>
		</Suspense>
	)
}