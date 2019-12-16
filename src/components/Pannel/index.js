import React from 'react'
import { Container, TitleContainer, Title, ChildrenContainer } from './style'
import { Icon } from 'antd'

export default function Pannel(props) {
  const { title, children } = props
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        {title ? <Icon type="right" /> : null}
      </TitleContainer>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </Container>
  )
}