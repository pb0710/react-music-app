import React, { useMemo, Suspense } from 'react'
import { Container } from './style'
import * as api from 'api'
import { useMappedState, useDispatch } from 'redux-react-hook';
import { randomBetween, wrapToSuspense } from 'utils'

import Carousel from '@/Carousel'
import Loading from '@/Loading'
import Pannel from '@/Pannel'
import SongslistCard from './SongslistCard'
import NewSongCard from './NewSongCard'
import MVCard from './MVCard'

function fetchRecommendData() {
	return {
		songslist: wrapToSuspense(api.fetchRecommendSongslist({ limit: 10 })),
		newSong: wrapToSuspense(api.fetchRecommendNewSong()),
		mv: wrapToSuspense(api.fetchRecommendMV()),
	}
}

function SongsList(props) {
	const { result } = props?.resource?.songslist?.read()
	return (
		<Pannel title="推荐歌单">
    	{
    		result.map(item => <SongslistCard key={item.id} dataSource={item} />)
    	}
    </Pannel>
	)
}

function NewSong(props) {
	const { result } = props?.resource?.newSong?.read()
	return (
		<Pannel title="最新歌曲">
    	{
    		result.map(item => <NewSongCard key={item.id} dataSource={item} />)
    	}
    </Pannel>
	)
}

function MV(props) {
	const { result } = props?.resource?.mv?.read()
	return (
		<Pannel title="推荐MV">
    	{
    		result.map(item => <MVCard key={item.id} dataSource={item} />)
    	}
    </Pannel>
	)
}

export default function Recommend() {
	const resource = useMemo(() => fetchRecommendData(), [])

	return (
		<Suspense fallback={<Loading size="large" />}>
			<Container>
				<Carousel autoScrollInterval={6000} />
				<SongsList resource={resource} />
				<NewSong resource={resource} />
				<MV resource={resource} />
	    </Container>
  	</Suspense>
	)
}