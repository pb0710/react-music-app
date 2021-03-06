import styled from 'styled-components'
import { Link } from 'react-router-dom'
import global from 'styles/globalStyle'

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: calc(50% - 20px);
	height: 80px;
	position: relative;
	border-radius: 4px;
	border-bottom: ${global.normalBorder};
	cursor: default;
	transition: background .2s;

	:nth-child(1),
	:nth-child(2) {
		border-top: ${global.normalBorder};
	}

	:hover {
		background: #eee;
	}
`

export const PicContainer = styled(Link)`
	display: flex;
	align-items: center;
	width: 60px;
	height: 60px;
	border-radius: 4px;
	overflow: hidden;
`

export const Pic = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 4px;
	transition: filter .2s ease-out;
`

export const Desc = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: calc(100% - 180px);
	height: 40px;

	>span {
		color: #555;
		font-size: 14px;
		${global.textOverflowEllipsis}
	}

	>a {
		max-width: 100px;
		color: #777;
		font-size: 12px;

		:hover {
			color: #1890ff;
		}
	}
`

export const Play = styled(Link)`
	width: 80px;
	height: 100%;
	text-align: center;

	>i {
		font-size: 30px;
		line-height: 80px;
		opacity: ${props => props.hide ? 0 : 1};
		transition: opacity .2s;
	}
`