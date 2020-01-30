import styled, { keyframes } from 'styled-components'
import global from 'styles/globalStyle'

const show = keyframes`
  0% {
    transform: scale(.8, 0);
  }

  60% {
    transform: scale(.95, 1.05);
  }

  100% {
    transform: scale(1, 1);
  }
`

export const Container = styled.div`
	display: flex;
	align-items: center;
	width: 300px;
	height: 100%;
	position: relative;
	top: 0;
`

export const ResultContainer = styled.div`
	width: 100%;
	min-height: 120px;
	position: absolute;
	top: 44px;
	left: 100px;
	background: #fff;
	border: ${global.normalBorder};
	border-radius: 10px;
	box-shadow: ${global.boxShadow};
	overflow: hidden;
	cursor: default;
	transform-origin: 0 0;
	animation: ${show} .4s ease-out;
`
