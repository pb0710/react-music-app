import styled from 'styled-components'
import { Link } from 'react-router-dom'
import global from 'styles/globalStyle'

export const Container = styled.div`
	width: 100%;
`

export const SortContainer = styled.div`
	width: 100%;
	:first-of-type {
		>div {
			border-top: none;
		}
	}
`

export const Title = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 36px;
	background: #fafafa;
	padding: 0 10px;
	border-top: ${global.normalBorder};
	border-bottom: ${global.normalBorder};
	font-size: 14px;
	color: #777;
`

export const Item = styled(Link)`
	display: flex;
	align-items: center;
	width: 100%;
	height: 30px;
	padding: 0 20px;
	>span {
		font-size: 13px;
		${global.textOverflowEllipsis}
	}
  :hover {
  	background: #eee;
  }
`

