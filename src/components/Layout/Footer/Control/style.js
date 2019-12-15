import styled from 'styled-components'
import { Icon } from 'antd'
import IconFont from 'styles/icon'

export const Wrapper = styled.div `
	display: flex;
	-ms-align-items: center;
	align-items: center;
	justify-content: space-around;
	width: 360px;
	height: 100%;
`

export const PlayWrapper = styled.div`
	display: flex;
	-ms-align-items: center;
	align-items: center;
	justify-content: space-between;
	width: 160px;
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

export const Love = styled(Icon)
`
	font-size: 18px;
`

export const Volume = styled(Icon)
`
	font-size: 18px;
`