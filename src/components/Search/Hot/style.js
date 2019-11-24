import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Wrapper = styled.div`
	width: 100%;
`

export const Title = styled.div`
	width: 100%;
	height: 30px;
	background: #fafafa;
	padding: 0 10px;
	line-height: 30px;
`

export const TagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: 5px;
`

export const Tag = styled.div`
	display: flex;
	justify-content: center;
	-ms-align-items: center;
	align-items: center;
	min-width: 60px;
	height: 30px;
	border: 1px solid #eee;
	border-radius: 15px;
	margin: 5px;
	padding: 0 10px;
	font-size: 13px;
	&:hover {
		background: #eee;
	}
`