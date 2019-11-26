import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: top;
	width: calc(8vw + 120px);
	height: calc(8vw + 70px);
	position: relative;
	cursor: default;
`

export const CountWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 4px;
	color: #fff;
	z-index: 9;

	>span {
		margin: 0 4px;
		font-size: 12px;
	}
`

export const PicWrapper = styled.div`
	width: 100%;
	height: calc(100% - 50px);
	border-radius: 4px;
	overflow: hidden;

	i {
		width: 120px;
		height: 120px;
		font-size: 120px;
		position: absolute;
		left: calc(50% - 60px);
		top: calc(50% - 85px);
		color: rgba(255, 255, 255, .8);
		z-index: 9;
		opacity: 0;
		transition: transform .2s ease-out;
	}

	:hover {
		.img {
			filter: brightness(60%);
			transform: scale(1.1);
		}

		i {
			transform: scale(.4);
			opacity: 1;
		}
	}
`

export const Pic = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;
	transition: all .2s ease-out;
`

export const DescWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 50px;
	font-size: 12px;
	padding: 4px 0 0 4px;
	cursor: pointer;

	>a {
		width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #777;

		:first-child {
			font-size: 14px;
			color: #444;
		}

		:hover {
			color: #1890ff;
		}
	}
`