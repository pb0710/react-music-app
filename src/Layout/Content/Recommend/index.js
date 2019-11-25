import React, { Fragment, useState, useEffect } from 'react'
import './index.scss'
import { Button, List } from 'antd'
import * as api from 'api'
import { useMappedState, useDispatch } from 'redux-react-hook';
import { randomBetween } from 'utils'
import Carousel from '@/Carousel'
import Pannel from '@/Pannel'
import SongslistCard from '@/SongslistCard'
import NewSongCard from '@/NewSongCard'
import MVCard from '@/MVCard'

export default function Recommend() {
	const [recommendSongslist, setRecommendSongslist] = useState([])
	const [recommendNewSong, setRecommendNewSong] = useState([])
	const [recommendMV, setRecommendMV] = useState([])

	const login = async () => {
		try {
			const res = await api.userLogin({ phone: '15617763757', password: 'pb13047224594' })
			console.log('登陆成功', res)
		} catch (e) {
			console.error('登陆失败', e);
		}
	}

	const getRemoteResource = async () => {
		try {
			const { result } = await api.fetchRecommendSongslist({ limit: 50 })
			const sliceBegin = randomBetween(0, 40)
			setRecommendSongslist(result.slice(sliceBegin, sliceBegin + 10))
			console.log('获取推荐歌单成功', result)
		} catch (e) {
			console.error('获取推荐歌单失败', e);
		}

		try {
			const { result } = await api.fetchRecommendNewSong()
			setRecommendNewSong(result)
			console.log('获取推荐新歌成功', result)
		} catch (e) {
			console.error('获取推荐新歌失败', e);
		}

		try {
			const { result } = await api.fetchRecommendMV()
			setRecommendMV(result)
			console.log('获取推荐MV成功', result)
		} catch (e) {
			console.error('获取推荐MV失败', e);
		}
	}

	useEffect(() => {
		login()
		getRemoteResource()
	}, [])

	const renderPannel = ({ title, content, Card }) => (
		<Pannel title={title}>
    	{
    		content.map(item => <Card key={item.id} dataSource={item} />)
    	}
    </Pannel>
	)

	return (
		<>
      <Carousel getCarousel={api.fetchCarousel} autoScrollInterval={6000} />
      {
      	renderPannel({
    			title: '推荐歌单',
      	  content: recommendSongslist,
      	  Card: SongslistCard
      	})
      }
			{
      	renderPannel({
    			title: '最新歌曲',
      	  content: recommendNewSong,
      	  Card: NewSongCard
      	})
      }
      {
      	renderPannel({
    			title: '推荐MV',
      	  content: recommendMV,
      	  Card: MVCard
      	})
      }
      <Pannel />
    </>
	)
}