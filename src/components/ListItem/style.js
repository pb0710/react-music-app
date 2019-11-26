import styled from 'styled-components'
import { Icon, Button, List } from 'antd'
import { Link } from 'react-router-dom'

export const Wrapper = styled(List.Item)`
	width: calc(40vw + 434px);
	margin: 0 auto;
	margin-bottom: 54px;
`

export const Title = styled.span`
	padding-left: 10px;
	width: 240px;
	color: #444;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`

export const OperationWrapper = styled.div`
	width: calc(100% - 700px);

	>i {
		color: #1890ff;
		font-size: 18px;
		padding: 0 10px;
		cursor: pointer;
		opacity: 0;
		transition: transform .2s ease-out, opacity .2s;

		&:hover {
			transform: scale(1.1);
		}

		&.selected {
			color: red;
		}
	}

	&:hover {
		background: #fafafa;

		>.song-operation-wrapper>i {
			opacity: 1;
		}
	}
`

export const Play = styled(Icon)`
	width: 100%;
	height: 30px;
`

export const Collect = styled(Icon)`
	width: 100%;
	height: 30px;
`

export const Download = styled(Icon)`
	width: 100%;
	height: 30px;
`

export const Singer = styled(Link)`
	width: 240px;
	color: #444;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`

export const Album = styled(Link)`
	width: 240px;
	color: #444;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`

export const Duration = styled.span`
	
`