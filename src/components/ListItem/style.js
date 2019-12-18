import styled from 'styled-components'
import { Icon, Button, List } from 'antd'
import { Link } from 'react-router-dom'
import global from 'styles/globalStyle'

export const Container = styled(List.Item)`
	width: 100%;
	height: 40px;
	border-radius: 4px;

	:hover {
		background: #fafafa;
	}
`

const ItemLink = styled(Link)`
	width: 240px;
	color: #444;
	${global.textOverflowEllipsis}
`

export const Title = styled.span`
	padding-left: 10px;
	width: 240px;
	color: #444;
	${global.textOverflowEllipsis}
`

export const Singer = styled(ItemLink)`

`

export const Album = styled(ItemLink)`

`

export const Duration = styled.span`
	width: 60px;
	padding-right: 10px;
`

export const OperationContainer = styled.div`
	width: calc(100% - 700px);
`

const OperationIcon = styled(Icon)`
	color: #1890ff;
	font-size: 18px;
	padding: 0 10px;
	cursor: pointer;
	transition: transform .2s ease-out, opacity .2s;

	:hover {
		transform: scale(1.1);
	}
`

export const Play = styled(OperationIcon)`

`

export const Collect = styled(OperationIcon)`

`

export const Download = styled(OperationIcon)`

`