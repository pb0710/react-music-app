import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	position: absolute;
	top: -14px;
	cursor: ${props => props.active ? 'pointer' : 'default'};
`