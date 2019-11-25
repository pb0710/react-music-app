import React, { useState } from 'react'
import './index.scss'
import { Menu, Icon } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import routeMap from 'common/routeMap'
const { Item } = Menu

export default function Drawer() {
	const dispatch = useDispatch()
	const { selected } = useMappedState(state => ({
		selected: state.sider.drawer.selected
	}))

	const handleSelect = e => {
		dispatch({
			type: 'CHANGE_DRAWER_SELECTED',
			payload: e.key
		})
	}

	return (
		<Menu className="drawer-wrapper" mode="inline" onClick={handleSelect} selectedKeys={selected}>
    	{
    		routeMap.map(item => <Item key={item.value}><Icon type={item.icon} />{item.title}</Item>)
    	}
    </Menu>
	)
}