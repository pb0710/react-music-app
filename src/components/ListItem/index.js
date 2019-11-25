import React from 'react'
import './index.scss'
import { Icon, Button, List } from 'antd'
import { Link } from 'react-router-dom'
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
    <List.Item>
      <span className="song-title">{name}</span>
      <div className="song-operation-wrapper">
        <Icon 
          type="play-square" 
          className={`song-play ${playingId === id ? 'selected' : ''}`} 
          onClick={() => props.handlePlayMusic(id)} 
          theme={playingId === id ? 'filled' : ''}
        />
        <Icon 
          type="heart"
          className={`song-collect ${playingId === id ? 'selected' : ''}`} 
          onClick={() => props.handleCollect(id)} 
          theme={playingId === id ? 'filled' : ''}
        />
        <Icon type="cloud-download" className="song-download" />
      </div>
      <Link to='/page/singer' className="song-singer">{singerName}</Link>
      <Link to='/page/album' className="song-album">{ablumName}</Link>
      <span className="song-span">3:45</span>
    </List.Item>
  )
}