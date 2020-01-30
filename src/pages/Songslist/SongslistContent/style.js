import styled from 'styled-components'
import global from 'styles/globalStyle'

export const Container = styled.div`
	width: ${global.containerWidth};
	margin: 0 auto;
	margin-bottom: 54px;
	font-size: 13px;
`

export const FirstItemContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 40px;
	background: #eee;
	border-radius: 4px;
`

const Item = styled.div`
	width: 240px;
	color: #444;
`

export const Title = styled(Item)`
	padding-left: 10px;
`

export const OperationContainer = styled.div`
	width: calc(100% - 700px);
`

export const Singer = styled(Item)`
`

export const Album = styled(Item)`
`

export const Duration = styled.div`
	width: 60px;
	padding-right: 10px;
`