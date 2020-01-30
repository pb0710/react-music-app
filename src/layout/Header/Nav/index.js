import React, { useState, useEffect } from 'react'
import { Container } from './style'
import { Menu } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import navRouteMap from 'common/navRouteMap'

export default function Nav() {
	const dispatch = useDispatch()
	const { drawerSelected } = useMappedState(state => ({
		drawerSelected: state.menu.selected
	}))
	const history = useHistory()
	const [current, setCurrent] = useState(navRouteMap[0].child[0].value)

	useEffect(() => {
		navRouteMap.forEach(item => {
			if (item.value === drawerSelected) {
				const selectedFirstChildsValue = item.child[0].value
				setCurrent(selectedFirstChildsValue)
				history.push(`/page/${drawerSelected}/${selectedFirstChildsValue}`)
			}
		})
	}, [drawerSelected])

	const handleClick = e => {
		setCurrent(e.key)
	}

	return (
		<Container onClick={handleClick} selectedKeys={current} mode="horizontal">
    	{
    		navRouteMap.map(item => 
    			item.value === drawerSelected && item.child.map(child => (
    				<Menu.Item key={child.value}>
    					<Link to={`/page/${item.value}/${child.value}`}>{child.title}</Link>
    				</Menu.Item>
    			))
    		)
    	}
    </Container>
	)
}