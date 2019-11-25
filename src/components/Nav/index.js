import React, { useState, useEffect } from 'react'
import './index.scss'
import { Menu } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import routeMap from 'common/routeMap'
const { Item } = Menu

export default function Nav() {
	const dispatch = useDispatch()
	const { selected } = useMappedState(state => ({
		selected: state.sider.drawer.selected
	}))
	const history = useHistory()
	const [current, setCurrent] = useState(routeMap[0].child[0].value)

	useEffect(() => {
		routeMap.forEach(item => {
			if (item.value === selected) {
				const selectedFirstChildsValue = item.child[0].value
				setCurrent(selectedFirstChildsValue)
				history.push(`/page/${selected}/${selectedFirstChildsValue}`)
			}
		})
	}, [selected])

	const handleClick = e => {
		setCurrent(e.key)
	}

	return (
		<Menu className="nav-wrapper" onClick={handleClick} selectedKeys={current} mode="horizontal">
    	{
    		routeMap.map(item => 
    			item.value === selected && item.child.map(sub => (
    				<Item key={sub.value}>
    					<Link to={`/page/${item.value}/${sub.value}`}>{sub.title}</Link>
    				</Item>
    			))
    		)
    	}
    </Menu>
	)
}