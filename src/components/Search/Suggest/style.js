import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
`

export const SortWrapper = styled.div`
	width: 100%;
	:first-of-type {
		>div {
			border-top: none;
		}
	}
`

export const Title = styled.div`
	display: flex;
	-ms-align-items: center;
	align-items: center;
	width: 100%;
	height: 30px;
	background: #fafafa;
	padding: 0 10px;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
	font-size: 14px;
	color: #777;
`

export const Item = styled.div`
	display: flex;
	-ms-align-items: center;
	align-items: center;
	width: 100%;
	height: 30px;
	padding: 0 20px;
	font-size: 13px;
	white-space: nowrap;  
	text-overflow: ellipsis; 
  overflow: hidden;
  :hover {
  	background: #eee;
  }
`

