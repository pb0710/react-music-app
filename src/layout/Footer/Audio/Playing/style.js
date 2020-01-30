import styled from 'styled-components'
import global from 'styles/globalStyle'

export const Container = styled.div`
	display: flex;
	width: 400px;
	cursor: default;
`

export const Pic = styled.img`
	width: 50px;
	height: 50px;
	margin: 5px;
	border-radius: 4px;
`

export const DescContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 10px;
`

export const Title = styled.div`
	max-width: 300px;
	${global.textOverflowEllipsis}

	>span {
		line-height: 30px;
		color: #444;
		font-size: 15px;
		max-width: 200px;
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

export const Duration = styled.span`
	color: #777;
	font-size: 12px;
`