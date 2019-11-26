import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { Menu } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { Link, useHistory } from 'react-router-dom'
import routeMap from 'common/routeMap'

export default function Nav() {
	const dispatch = useDispatch()
	const { selected } = useMappedState(state => ({
		selected: state.sider.selected
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
		<Wrapper onClick={handleClick} selectedKeys={current} mode="horizontal">
    	{
    		routeMap.map(item => 
    			item.value === selected && item.child.map(child => (
    				<Menu.Item key={child.value}>
    					<Link to={`/page/${item.value}/${child.value}`}>{child.title}</Link>
    				</Menu.Item>
    			))
    		)
    	}
    </Wrapper>
	)
}