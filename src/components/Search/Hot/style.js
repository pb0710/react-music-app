import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
	width: 100%;
`

export const Title = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 30px;
	background: #fafafa;
	border-bottom: 1px solid #eee;
	padding: 0 10px;
	font-size: 14px;
`

export const TagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: 10px 5px;
`

export const Tag = styled.div`
	display: flex;
	justify-content: center;
	-ms-align-items: center;
	align-items: center;
	min-width: 60px;
	height: 30px;
	background: #fff;
	border: 1px solid rgba(200, 200, 200, .4);
	border-radius: 15px;
	margin: 5px;
	padding: 0 10px;
	font-size: 13px;
	&:hover {
		background: #e6f7ff;
		border: 1px solid #1890ff;
		color: #1890ff;
	}
`