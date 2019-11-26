import styled, { keyframes } from 'styled-components'

const show = keyframes `
  0% {
    transform: scale(.8, 0);
  }

  60% {
    transform: scale(.95, 1.1);
  }

  100% {
    transform: scale(1, 1);
  }
`

export const Wrapper = styled.div `
	display: flex;
	-ms-align-items: center;
	align-items: center;
	width: 300px;
	height: 100%;
	position: relative;
	top: 0;
`

export const ResultWrapper = styled.div `
	width: 100%;
	min-height: 60px;
	position: absolute;
	top: 44px;
	background: #fff;
	border: 1px solid #eee;
	border-radius: 10px;
	-webkit-box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, .1);
	box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, .1);
	overflow: hidden;
	cursor: default;
	-webkit-transform-origin: 0 0;
	-moz-transform-origin: 0 0;
	-ms-transform-origin: 0 0;
	-o-transform-origin: 0 0;
	transform-origin: 0 0;
	animation: ${show} .4s ease-out;
`