import styled from 'styled-components'
import global, { Glass } from 'styles/globalStyle'

export const Container = styled(Glass)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 220px;
	width: 100vw;
	height: ${global.headerHeight};
	position: fixed;
	top: 0;
	z-index: 9999;
	border-bottom: ${global.transparentBorder};
`
