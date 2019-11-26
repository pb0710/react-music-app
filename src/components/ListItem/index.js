import React from 'react'
import { Wrapper, Title, OperationWrapper, Play, Collect, Download, Singer, Album, Duration } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pageRouter from 'common/pageRouter'

export default function ListItem(props) {
  const dispatch = useDispatch()
  const { playingId } = useMappedState(state => ({
    playingId: state.footer.playing.id
  }))
  const { id, name, al: { name: ablumName }, ar } = props.item
  const { id: singerId, name: singerName } = ar[0]

  return (
    <Wrapper>
      <Title>{name}</Title>
      <OperationWrapper>
        <Play 
          type="play-square" 
          selected={playingId === id}
          onClick={() => props.handlePlayMusic(id)} 
          theme={playingId === id ? 'filled' : ''}
        />
        <Collect 
          type="heart"
          selected={playingId === id}
          onClick={() => props.handleCollect(id)} 
          theme={playingId === id ? 'filled' : ''}
        />
        <Download type="cloud-download" />
      </OperationWrapper>
      <Singer to="/page/singer">{singerName}</Singer>
      <Album to="/page/album">{ablumName}</Album>
      <Duration>3:45</Duration>
    </Wrapper>
  )
}