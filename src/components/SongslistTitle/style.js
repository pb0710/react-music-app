import styled from 'styled-components'
import { Icon, Button } from 'antd'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: calc(40vw + 434px);
	margin: 20px auto;
`

export const Pic = styled.img`
	width: 180px;
	height: 180px;
	box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .2);
	border-radius: 4px;
`

export const DescWrapper = styled.div`
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

export const UserWrapper = styled(Link)`

	>span {
		padding-left: 10px;
	}
`

export const Avatar = styled.img`
	width: 24px;
	height: 24px;
	border-radius: 50%;
`

export const BtnWrapper = styled.div`
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
