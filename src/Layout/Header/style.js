import styled from 'styled-components'

export const Wrapper = styled.header `
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100vw;
	height: 48px;
	position: fixed;
	top: 0;
	z-index: 9999;
	border-bottom: 1px solid rgba(200, 200, 200, .4);
	background: rgba(255, 255, 255, .8);
	backdrop-filter: blur(30px);
`
