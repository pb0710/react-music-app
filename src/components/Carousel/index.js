import React, { useState, useEffect, useMemo } from 'react'
import { Img, Container, IndicatorContainer, Indicator, BtnContainer, LeftBtn, RightBtn } from './style'
import * as utils from 'utils'
import * as api from 'api'

export default function Carousel(props) {
  const { autoScrollInterval } = props
  let scrollTimeout

  const [banners, setBanners] = useState([])
  const [position, setPosition] = useState([])
  const [isFocus, setIsFocus] = useState(false)

  const getRemotePic = async () => {
    try {
      const { banners } = await api.fetchCarousel()
      setBanners(banners)
      setPosition(utils.fillArraySequence(banners.length))
    } catch (e) {
      console.error('获取轮播图失败', e);
    }
  }

  useEffect(() => {
    getRemotePic()
  }, [])

  useEffect(() => {
    isFocus 
      ? clearTimeout(scrollTimeout)
      : scrollTimeout = setTimeout(() => {
          carouselScrollTo(2)
        },
        autoScrollInterval ? autoScrollInterval : 5000
      )
    return () => {
      clearTimeout(scrollTimeout)
    }
  })

  const carousel = useMemo(() => banners.map((item, index) => ({
    ...item,
    position: position[index]
  })), [banners, position])

  const carouselScrollTo = selectedPosition => {
    const len = carousel.length
    const newPosition = carousel.map(item => {
      let { position } = item
      position -= selectedPosition - 1
      if (position < 0) {
        position += len
      } else if (position === len) {
        position = 0
      }
      return position
    })
    setPosition(newPosition)
  }

  const handleMouseMove = () => {
    setIsFocus(prev => !prev)
  }

  const handleSelect = position => {
    carouselScrollTo(position)
  }

  const handleForward = () => {
    carouselScrollTo(0)
  }

  const handleReturn = () => {
    carouselScrollTo(2)
  }

  const bannerRender = () => carousel.map(item => (
    <Img 
      key={item.imageUrl} 
      src={item.imageUrl} 
      alt={item.imageTitle} 
      position={item.position}
      onClick={() => handleSelect(item.position)}
    />
  ))

  const indicatorRender = () => (
    <IndicatorContainer>
      {
        position.map(item => 
          <Indicator 
            key={item} 
            selected={item === 1 ? true : false} 
            onMouseEnter={() => handleSelect(item)}
          />
        )
      }
    </IndicatorContainer>
  )

  const btnRender = () => (
    <BtnContainer hide={!isFocus}>
      <LeftBtn onClick={handleForward} type="left"/>
      <RightBtn onClick={handleReturn} type="right"/>
    </BtnContainer>
  )

  return (
    <Container 
      onMouseEnter={handleMouseMove} 
      onMouseLeave={handleMouseMove}
    >
      {bannerRender()}
      {btnRender()}
      {indicatorRender()}
    </Container>
  )
}