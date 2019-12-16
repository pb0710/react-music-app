import styled from 'styled-components'
import { Icon } from 'antd'
import global, { Glass } from 'styles/globalStyle'

const playlistWidth = '400px'

export const Container = styled(Glass)`
	display: flex;
	flex-direction: column;
	width: ${playlistWidth};
	height: calc(100vh - ${global.headerHeight} - ${global.footerHeight});
	position: fixed;
	right: 0;
	bottom: ${global.footerHeight};
	border-left: ${global.transparentBorder};
	box-shadow: ${global.boxShadow};
	z-index: 999;
	transition: transform .4s ease-out;
	transform: translateX(${props => props.isShow ? 0 : playlistWidth});
`
