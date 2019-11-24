import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
`

export const SortWrapper = styled.div`
	width: 100%;
`

export const Title = styled.div`
	width: 100%;
	height: 30px;
	background: #fafafa;
	padding: 0 10px;
	line-height: 30px;
`

export const Item = styled.div`
	width: 100%;
	height: 30px;
	padding: 0 20px;
	line-height: 30px;
	font-size: 13px;
	white-space: nowrap;  
	text-overflow: ellipsis; 
  overflow: hidden;
  &:hover {
  	background: #eee;
  }
`
