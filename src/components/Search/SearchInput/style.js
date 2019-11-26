import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	height: 30px;
`

export const Input = styled.input`
	${props => props.isFocus 
		? `
			width: 300px;
			border: 1px solid #1890ff;
			background: #fff;
			text-align: left;
		` 
		: `
			width: 200px;
			background: #fafafa;
			border: 1px solid #eee;
			text-align: center
		`
	}
	height: 30px;
	padding: 0 10px;
	outline: none;
	border-radius: 15px;
	font-size: 13px;
	-webkit-transition: all .4s;
	-o-transition: all .4s;
	transition: all .4s;
`
