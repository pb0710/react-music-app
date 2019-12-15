import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100vw;
	height: 60px;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 9999;
	border-top: 1px solid rgba(200, 200, 200, .4);
	background: rgba(255, 255, 255, .8);
	backdrop-filter: blur(30px);
`