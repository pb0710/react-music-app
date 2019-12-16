import styled from 'styled-components'
import { Icon } from 'antd'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 220px;
	position: relative;
	margin: 20px 0;
`

export const BtnContainer = styled.div`
	display: ${props => props.hide ? 'none' : 'flex'};
	justify-content: space-between;
	align-items: center;
	width: calc(40vw + 400px);
	height: calc(100% - 20px);
	position: absolute;
	top: 0;

	>i {
		font-size: 26px;
		color: rgba(255, 255, 255, .8);
		z-index: 99;
	}
`

export const IndicatorContainer = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: 160px;
	position: absolute;
	bottom: 0;
`

export const Indicator = styled.div`
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: ${props => props.selected ? '#1890ff' : '#ddd'};
`

export const Img = styled.img`
	/* 禁止用户选中 */
	user-select: none;
	width: 540px;
	height: 200px;
	position: absolute;
	border-radius: 4px;
	transition: all .4s ease-out;
	filter: brightness(60%);
	opacity: 1;
	${props => {
		switch (props.position) {
			case 0:
				return `
					transform: translateX(-20vw) scale(.8);
					z-index: 9;
				`
			case 1:
				return `
					transform: translateX(0) scale(1);
					filter: brightness(100%);
					z-index: 99;
					cursor: pointer;
				`
			case 2:
				return `
					transform: translateX(20vw) scale(.8);
					z-index: 9;
				`
			default:
				return `
					transform: translateX(0) scale(.8);
					opacity: 0;
				`
		}
	}}
`

const directionBtn = styled(Icon)`
	line-height: 64px;
	font-size: 26px;
	color: rgba(255, 255, 255, .8);
	z-index: 99;
`

export const LeftBtn = styled(directionBtn)`
	left: calc(50% - 20vw - 210px);
`

export const RightBtn = styled(directionBtn)`
	right: calc(50% - 20vw - 210px);
`