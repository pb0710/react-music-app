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

// 遮罩层
export const Mask = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	opacity: 0;
	z-index: 99999;
`

export const PlaylistItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 40px;
	background: ${props => props.current && 'rgba(180, 180, 180, .1)'};

	:hover {
		background: rgba(100, 100, 100, .1);
	}
`

const Sub = styled.div`
	height: 100%;
	line-height: 40px;
	font-size: 13px;
	${global.textOverflowEllipsis}
`

export const SongName = styled(Sub)`
	width: 180px;
	color: #444;
`

export const Singer = styled(Sub)`
	width: 120px;
	color: #777;
`