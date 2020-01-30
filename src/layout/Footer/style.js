import styled from 'styled-components'
import global, { Glass } from 'styles/globalStyle'

export const Container = styled(Glass)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	height: ${global.footerHeight};
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 9999;
	/*border-top: ${global.transparentBorder};*/
`