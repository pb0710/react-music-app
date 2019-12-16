import styled from 'styled-components'
import global from 'styles/globalStyle'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100px;
	position: relative;
`

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	min-width: 100px;
	height: 40px;
	font-size: 16px;
	margin-bottom: 10px;
	cursor: default;
`

export const Title = styled.span`
	font-weight: bolder;
	margin-right: 4px;
	color: #555;
`

export const ChildrenContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
`