import styled from 'styled-components'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

export const Wrapper = styled(Link)`
	display: flex;
	flex-direction: column;
	width: calc(6vw + 90px);
	height: calc(6vw + 140px);
	margin-bottom: 10px;
	position: relative;
	cursor: default;
`

export const CountWrapper = styled.div`
	position: absolute;
	top: 4px;
	right: 4px;
	color: #fff;
	z-index: 9;

	>span {
		margin: 0 4px;
		font-size: 13px;
	}
`

export const PicWrapper = styled.div`
	width: 100%;
	height: calc(100% - 50px);
	border-radius: 4px;
	overflow: hidden;

	:hover {
		>img {
			filter: brightness(80%);
		}

		~.enter-wrapper {
			opacity: 1;
		}
	}
`

export const Pic = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;
	transition: filter .2s ease-out;
`

export const Open = styled(Icon)`
	position: absolute;
	right: 10px;
	bottom: 60px;
	font-size: 40px;
	color: #fafafa;
	opacity: 0;
	z-index: 9;
	transition: opacity .2s ease-out;

	:hover {
		opacity: 1
	}
`

export const Title = styled.span`
	height: 40px;
	line-height: 26px;
	font-size: 13px;
	padding: 8px 0 0 2px;
	color: #555;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	cursor: pointer;

	:hover {
		color: #1890ff;
	}
`