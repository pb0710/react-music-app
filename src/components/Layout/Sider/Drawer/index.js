import React, { useState } from 'react'
import { Wrapper} from './style'
import { Menu, Icon } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import navRouteMap from 'common/navRouteMap'
const { Item } = Menu

export default function Drawer() {
	const dispatch = useDispatch()
	const { selected } = useMappedState(state => ({
		selected: state.sider.selected
	}))

	const handleSelect = e => {
		dispatch({
			type: 'CHANGE_DRAWER_SELECTED',
			payload: e.key
		})
	}

	return (
		<Wrapper mode="inline" onClick={handleSelect} selectedKeys={selected}>
    	{
    		navRouteMap.map(item => (
    			<Item key={item.value}>
	    			<Icon type={item.icon} />{item.title}
	    		</Item>)
    		)
    	}
    </Wrapper>
	)
}