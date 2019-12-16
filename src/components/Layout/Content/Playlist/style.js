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
	box-shadow: -1px 0px 3px 0 rgba(0, 0, 0, .1);
	z-index: 999999;
	transition: transform .4s ease-out;
	transform: translateX(${props => props.isShow ? 0 : playlistWidth});
`

export const Mask = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	opacity: 0;
	z-index: 99999;
`