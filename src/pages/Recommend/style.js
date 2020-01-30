import styled from 'styled-components'
import global from 'styles/globalStyle'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: ${global.containerWidth};
	min-height: calc(100% - ${global.headerHeight} - ${global.footerHeight});
	margin: 20px auto;
`