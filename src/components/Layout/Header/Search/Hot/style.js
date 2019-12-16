import styled from 'styled-components'
import global from 'styles/globalStyle'

export const Container = styled.div`
	width: 100%;
`

export const Title = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 36px;
	background: #fafafa;
	border-bottom: ${global.normalBorder};
	padding: 0 10px;
	font-size: 14px;
`

export const TagContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: 10px 5px;
`

export const Tag = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 60px;
	height: 30px;
	background: #fff;
	border: ${global.normalBorder};
	border-radius: 15px;
	margin: 5px;
	padding: 0 10px;
	font-size: 13px;
	:hover {
		background: #e6f7ff;
		border: 1px solid #1890ff;
		color: #1890ff;
	}
`