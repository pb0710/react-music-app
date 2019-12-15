import styled from 'styled-components'
import { Icon } from 'antd'

export const Wrapper = styled.div`
	display: flex;
	-webkit-flex-direction: column;
	-moz-flex-direction: column;
	-ms-flex-direction: column;
	-o-flex-direction: column;
	flex-direction: column;
	width: 400px;
	height: calc(100vh - 108px);
	position: fixed;
	bottom: 60px;
	right: 0;
	border-left: 1px solid rgba(200, 200, 200, .4);
	-webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, .1);
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, .1);
	background: rgba(255, 255, 255, .8);
	backdrop-filter: blur(30px);
	z-index: 99;
	-webkit-transition: transform .4s;
	-o-transition: transform .4s;
	transition: transform .4s;
	transform: ${props => props.isShow ? 'translateX(0)' : 'translateX(400px)'};
`
