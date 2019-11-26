import styled from 'styled-components'
import { Icon } from 'antd'

export const Wrapper = styled.div `
	display: flex;
	justify-content: center;
	height: 220px;
	position: relative;
	margin: 20px 0;
`

export const BtnWrapper = styled.div `
	display: ${props => (props.hide ? 'none' : 'block')};
	position: absolute;
	top: calc(50% - 40px);
	color: rgba(255, 255, 255, .8);
	>div {
		position: absolute;
		top: calc(50% - 40px);
		line-height: 64px;
		font-size: 26px;
		color: rgba(255, 255, 255, .8);
		z-index: 99;
	}
`

export const IndicatorWrapper = styled.div `
	display: flex;
	justify-content: space-between;
	min-width: 160px;
	position: absolute;
	bottom: 0;
`

export const Indicator = styled(Icon)
`
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: ${props => props.selected ? '#1890ff' : '#ddd'};
`

export const Img = styled.img `
	/* 关闭用户选中 */
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	-khtml-user-select: none;
	user-select: none;
	width: 540px;
	height: 200px;
	position: absolute;
	border-radius: 4px;
	transition: all .4s ease-out;
	opacity: 1;
	${props => {
		switch (props.position) {
			case 0:
				return `
					transform: translateX(-20vw) scale(.8);
					filter: brightness(60%);
					z-index: 9;
				`
			case 1:
				return `
					transform: translateX(0) scale(1);
					z-index: 99;
					cursor: pointer;
				`
			case 2:
				return `
					transform: translateX(20vw) scale(.8);
					filter: brightness(60%);
					z-index: 9;
				`
			default:
				return `
					transform: translateX(0) scale(.8);
					filter: brightness(60%);
					opacity: 0;
				`
		}
	}}
`

export const Left = styled(Icon)
`
	line-height: 64px;
	font-size: 26px;
	color: rgba(255, 255, 255, .8);
	z-index: 99;
	left: calc(50% - 20vw - 210px);
`

export const Right = styled(Icon)
`
	line-height: 64px;
	font-size: 26px;
	color: rgba(255, 255, 255, .8);
	z-index: 99;
	right: calc(50% - 20vw - 210px);
`