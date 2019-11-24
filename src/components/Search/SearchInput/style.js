import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	height: 36px;
`

export const Input = styled.input`
	width: ${props => props.isFocus ? '300px' : '120px'};
	height: 30px;
	padding: 0 10px;
	outline: none;
	border: 1px solid ${props => props.isFocus ? 'pink' : '#eee'};
	border-radius: 15px;
	font-size: 13px;
	text-align: ${props => props.isFocus ? 'left' : 'center'};
	-webkit-transition: all .4s;
	-o-transition: all .4s;
	transition: all .4s;
`
