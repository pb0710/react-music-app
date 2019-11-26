import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(40vw + 434px);
	min-height: 100px;
	margin: 20px auto;
	position: relative;
`

export const TitleWrapper = styled.div`
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

	:hover {
		color: #333;
	}
`

export const ChildrenWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
`