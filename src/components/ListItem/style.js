import styled from 'styled-components'
import { Icon, Button, List } from 'antd'
import { Link } from 'react-router-dom'

export const Wrapper = styled(List.Item)`
	width: 100%;
	height: 40px;
	border-radius: 4px;

	:hover {
		background: #fafafa;
	}
`

export const Title = styled.span`
	padding-left: 10px;
	width: 240px;
	color: #444;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
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
	width: 80px;
	padding-right: 10px;
`

export const OperationWrapper = styled.div`
	width: calc(100% - 700px);

	i {
		color: #1890ff;
		font-size: 18px;
		padding: 0 10px;
		cursor: pointer;
		transition: transform .2s ease-out, opacity .2s;

		:hover {
			transform: scale(1.1);
		}
	}
`

export const Play = styled(Icon)`

`

export const Collect = styled(Icon)`

`

export const Download = styled(Icon)`

`