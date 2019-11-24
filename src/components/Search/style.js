import styled, { keyframes } from 'styled-components'

const show = keyframes `
  0% {
    transform: scaleY(0);
    opacity: 0;
  }

  60% {
    transform: scaleY(1.1);
    opacity: 1;	
  }

  100% {
    transform: scaleY(1);
    opacity: 1;	
  }
`

export const Wrapper = styled.header `
	width: 320px;
	height: 60px;
	position: relative;
	top: 0;
`

export const ResultWrapper = styled.div `
	width: 100%;
	position: absolute;
	top: 40px;
	background: #fff;
	border: 1px solid #eee;
	border-radius: 10px;
	overflow: hidden;
	cursor: default;
	-webkit-transform-origin: center 0;
	-moz-transform-origin: center 0;
	-ms-transform-origin: center 0;
	-o-transform-origin: center 0;
	transform-origin: center 0;
	animation: ${show} .4s ease-out;
`