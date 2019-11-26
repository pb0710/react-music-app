import React from 'react'
import {Wrapper, TitleWrapper, Title, ChildrenWrapper} from './style'
import { Icon } from 'antd'

export default function Pannel(props) {
  const { title, children } = props
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        {title ? <Icon type="right"></Icon> : null}
      </TitleWrapper>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </Wrapper>
  )
}