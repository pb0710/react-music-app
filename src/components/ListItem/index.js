import React, { useState } from 'react'
import { Wrapper, Title, OperationWrapper, Play, Collect, Download, Singer, Album, Duration } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pagesRouteMap from 'common/pagesRouteMap'

export default function ListItem(props) {
  const dispatch = useDispatch()
  const { playingId } = useMappedState(state => ({
    playingId: state.footer.playing.id
  }))
  const { id, name, al: { name: ablumName }, ar } = props.item
  const { id: singerId, name: singerName } = ar[0]

  const [isFocus, setIsFocus] = useState(false)

  const handleMouseEnter = () => {
    setIsFocus(true)
  }

  const handleMouseLeave = () => {
    setIsFocus(false)
  }

  return (
    <Wrapper 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Title>{name}</Title>
        <OperationWrapper>
          {
            isFocus 
              ? 
                <>
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
                </>
              : null
          }
        </OperationWrapper>
      <Singer to="/page/singer">{singerName}</Singer>
      <Album to="/page/album">{ablumName}</Album>
      <Duration>3:45</Duration>
    </Wrapper>
  )
}