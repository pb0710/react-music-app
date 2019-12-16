import styled from 'styled-components'
import { Menu } from 'antd'

export const Container = styled(Menu)`
	height: 100%;

	&.ant-menu {
		border: none;
		background: rgba(255, 255, 255, 0);
	}
`