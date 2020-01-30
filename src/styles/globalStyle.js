import styled from 'styled-components'
import { Spin } from 'antd'

export const Glass = styled.div`
	background: rgba(255, 255, 255, .8);
	backdrop-filter: blur(30px);
`

export default {
	containerWidth: 'calc(40vw + 434px)',
	headerHeight: '48px',
	siderWidth: '200px',
	footerHeight: '60px',
	progressHeight: '3px',
	normalBorder: '1px solid #eee',
	transparentBorder: '1px solid rgba(200, 200, 200, .4)',
	boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, .2)',

	textOverflowEllipsis: `
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	`
}