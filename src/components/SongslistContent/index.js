import React from 'react'
import { Wrapper, FirstItem, Title, OperationWrapper,Singer, Album, Duration } from './style'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pagesRouteMap from 'common/pagesRouteMap'
import ListItem from '@/ListItem'

export default function SongslistContent(props) {
  const dispatch = useDispatch()

  if (props.dataSource.length === 0) return null
  const { tracks } = props.dataSource

  const handlePlayMusic = id => {
    dispatch({
      type: 'PLAY_MUSIC',
      payload: id
    })
  }

  const handleCollect = id => {
    console.log('love')
    dispatch({
      type: 'COLLECT_MUSIC',
      payload: id
    })
  }

  const handleRouteToUser = userId => {
    dispatch({
      type: 'CHANGE_USER_ID',
      payload: userId
    })
  }

  return (
    <Wrapper>
      <FirstItem>
        <Title>歌曲名</Title>
        <OperationWrapper/>
        <Singer>歌手</Singer>
        <Album>专辑</Album>
        <Duration>时长</Duration>
      </FirstItem>
      {
        tracks.map(item => <ListItem 
          item={item} 
          key={item.id} 
          handlePlayMusic={handlePlayMusic} 
          handleCollect={handleCollect} 
        />)
      }
    </Wrapper>
  )
}