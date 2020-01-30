import styled from 'styled-components'
import global from 'styles/globalStyle'

export const Container = styled.div`
	width: calc(100vw - ${global.siderWidth});
	height: 100vh;
	position: absolute;
	right: 0;
	top: 0;
	padding-top: ${global.headerHeight};
	padding-bottom: ${global.footerHeight};
`