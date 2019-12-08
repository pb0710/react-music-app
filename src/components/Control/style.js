import styled from 'styled-components'
import { Icon } from 'antd'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1268494_rlgaxozsrt8.js',
})

export const Wrapper = styled.div `
	display: flex;
	-ms-align-items: center;
	align-items: center;
	justify-content: center;
	width: 400px;
	height: 100%;
`

export const Pause = styled(IconFont)
`
	font-size: 60px;
`

export const Play = styled(IconFont)
`
	font-size: 60px;
`

export const Previous = styled(IconFont)
`
	font-size: 44px;
`

export const Next = styled(IconFont)
`
	font-size: 44px;
`