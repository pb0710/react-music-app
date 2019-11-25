import React, { useState, useEffect, useMemo } from 'react'
import { Img, Wrapper, IndicatorWrapper,Indicator, BtnWrapper,Left, Right } from './style'
import * as utils from 'utils'

export default function Carousel(props) {
  const { getCarousel, autoScrollInterval } = props
  let scrollTimeout

  const [banners, setBanners] = useState([])
  const [position, setPosition] = useState([])
  const [allowScroll, setAllowScroll] = useState(true)
  const [isBtnHide, setIsBtnHide] = useState(true)

  const getRemotePic = async () => {
    try {
      const { banners } = await getCarousel()
      setBanners(banners)
      console.log('获取轮播图成功', banners)
    } catch (e) {
      console.error('获取轮播图失败', e);
    }
  }

  useEffect(() => {
    getRemotePic()
  }, [])

  useEffect(() => {
    setPosition(utils.fillArraySequence(banners.length))
  }, [banners])

  useEffect(() => {
    if (allowScroll) {
      scrollTimeout = setTimeout(
        () => {
          carouselScrollTo(2)
        },
        autoScrollInterval ? autoScrollInterval : 5000
      )
    } else {
      clearTimeout(scrollTimeout)
    }
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

  const changeScrollStatus = (isMove) => {
    setIsBtnHide(isMove)
    setAllowScroll(isMove)
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
    <IndicatorWrapper className="index-wrapper">
      {
        position.map(item => 
          <Indicator 
            key={item} 
            selected={item === 1 ? true : false} 
            onMouseEnter={() => handleSelect(item)}
          />
        )
      }
    </IndicatorWrapper>
  )

  const btnRender = () => (
    <BtnWrapper hide={false}>
      <Left onClick={handleForward} type="left"/>
      <Right onClick={handleReturn} type="right"/>
    </BtnWrapper>
  )

  return (
    <Wrapper className="carousel-wrapper" onMouseEnter={() => changeScrollStatus(false)} onMouseLeave={() => changeScrollStatus(true)}>
      {bannerRender()}
      {btnRender()}
      {indicatorRender()}
    </Wrapper>
  )
}