import styled from 'styled-components'
import global from 'styles/globalStyle'

export const Container = styled.div`	
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
			background: rgba(255, 255, 255, .4);
			border: ${global.transparentBorder};
			text-align: center;
		`
	}
	height: 100%;
	padding: 0 10px;
	margin-left: 100px;
	outline: none;
	border-radius: 15px;
	font-size: 13px;
	transition: all .4s;
`
