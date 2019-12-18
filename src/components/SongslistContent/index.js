import React from 'react'
import { Container, FirstItemContainer, Title, OperationContainer, Singer, Album, Duration } from './style'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pagesRouteMap from 'common/pagesRouteMap'
import ListItem from '@/ListItem'

export default function SongslistContent(props) {
  const dispatch = useDispatch()
  const { playingId } = useMappedState(state => ({
    playingId: state.footer.playing.id
  }))

  if (props.dataSource.length === 0) return null
  const { tracks } = props.dataSource

  const handlePlayMusic = id => {
    id !== playingId && dispatch({
      type: 'ADD_MUSIC_TO_PLAYLIST',
      payload: id
    })
  }

  const handleCollect = id => {
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
    <Container>
      <FirstItemContainer>
        <Title>歌曲名</Title>
        <OperationContainer />
        <Singer>歌手</Singer>
        <Album>专辑</Album>
        <Duration>时长</Duration>
      </FirstItemContainer>
      {
        tracks.map(item => (
          <ListItem 
            dataSource={item} 
            key={item.id} 
            handlePlayMusic={handlePlayMusic} 
            handleCollect={handleCollect} 
          />
        ))
      }
    </Container>
  )
}