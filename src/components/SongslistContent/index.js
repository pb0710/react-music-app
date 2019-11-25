import React from 'react'
import './index.scss'
import { Icon, Button, List } from 'antd'
import { Link } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'
import pageRouter from 'common/pageRouter'
import ListItem from '@/ListItem'

export default function SongslistContent(props) {
  const dispatch = useDispatch()

  if (props.dataSource.length === 0) return null
  const { tracks } = props.dataSource

  const handlePlayMusic = id => {
    console.log('play')
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
    <List className="list-content-wrapper">
      <List.Item className='list-header-wrapper'>
        <span className="song-title">歌曲名</span>
        <div className="song-operation-wrapper"></div>
        <span className="song-singer">歌手</span>
        <span className="song-album">专辑</span>
        <span className="song-span">时长</span>
      </List.Item>
      {
        tracks.map(item => (<ListItem 
          item={item} 
          key={item.id} 
          handlePlayMusic={handlePlayMusic} 
          handleCollect={handleCollect} 
        />))
      }
    </List>
  )
}