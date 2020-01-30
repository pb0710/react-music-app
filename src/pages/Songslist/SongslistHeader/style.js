import styled from 'styled-components'
import { Icon, Button } from 'antd'
import { Link } from 'react-router-dom'
import global from 'styles/globalStyle'

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: ${global.containerWidth};
	margin: 20px auto;
`

export const Pic = styled.img`
	width: 180px;
	height: 180px;
	box-shadow: ${global.boxShadow};
	border-radius: 4px;
`

export const DescContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: calc(100% - 220px);

	>span {
		max-height: 36px;
		overflow: hidden;
		font-size: 12px;
		cursor: default;
	}

	>span:first-child {
		color: #444;
		font-size: 20px;
		font-weight: bolder;
	}
`

export const UserContainer = styled(Link)`

	>span {
		padding-left: 10px;
	}
`

export const Avatar = styled.img`
	width: 24px;
	height: 24px;
	border-radius: 50%;
`

export const BtnContainer = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 300px;
`

export const PlayAll = styled(Button)`
	>span {
		color: #fff;
	}
`

export const CollectAll = styled(Button)`
	
`

export const DownloadAll = styled(Button)`
	
`
