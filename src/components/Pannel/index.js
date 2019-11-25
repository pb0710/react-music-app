import React from 'react'
import './index.scss'
import { Icon } from 'antd'

export default function Pannel(props) {
  const { title, children } = props
  return (
    <div className="pannel-wrapper">
      <div className="title-wrapper">
        <span>{title}</span>
        {title ? <Icon type="right"></Icon> : null}
      </div>
      <div className="children-wrapper">
        {children}
      </div>
    </div>
  )
}