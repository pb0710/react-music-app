import styled from 'styled-components'
import global from 'styles/globalStyle'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: top;
	width: calc(9vw + 90px);
	height: calc(5vw + 110px);
	position: relative;
	cursor: default;
	margin-bottom: 50px;
`

export const CountContainer = styled.div`
	position: absolute;
	top: 0;
	right: 4px;
	z-index: 9;

	>i {
		color: #fff;
	}

	>span {
		margin: 0 4px;
		color: #fff;
		font-size: 12px;
	}
`

export const PicContainer = styled(Link)`
	width: 100%;
	height: calc(100% - 50px);
	border-radius: 4px;
	overflow: hidden;

	:hover {
		img {
			filter: brightness(80%);
		}

		i {
			transform: scale(.4);
			opacity: 1;
		}
	}
`

export const PlayIcon = styled(Icon)`
	width: 120px;
	height: 120px;
	font-size: 120px;
	position: absolute;
	left: calc(50% - 60px);
	top: calc(50% - 85px);
	z-index: 9;
	opacity: 0;
	transition: transform .2s ease-out;
`

export const Pic = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;
	transition: all .2s ease-out;
`

export const DescContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 50px;
	font-size: 12px;
	padding: 4px 0 0 4px;
	cursor: pointer;

	>a {
		width: 100%;
		${global.textOverflowEllipsis}
		color: #777;

		:first-child {
			font-size: 14px;
			color: #444;
		}

		:hover {
			color: #1890ff;
		}
	}
`