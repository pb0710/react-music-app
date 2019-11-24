import React, { useState, useEffect, useMemo } from 'react'
import { Wrapper, Search, ResultWrapper, SortWrapper, Item, Title } from './style'
import { Input } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import Suggest from './Suggest'
import Hot from './Hot'

export default function Header() {
	const { searchSuggest } = useMappedState(state => ({
		searchSuggest: state.header.searchSuggest
	}))
	const { order } = searchSuggest

	const dispatch = useDispatch()

	const [inputValue, setInputValue] = useState('')
	const [isFocus, setIsFocus] = useState(false)
	const [isHover, setIsHover] = useState(false)

	const isShowPannel = useMemo(() => {
		return isFocus || isHover
	})

	const handleInput = e => {
		const value = e.currentTarget.value
		setInputValue(value)
		dispatch({
			type: 'FETCH_SEARCH_RESULT',
			payload: value
		})
	}

	const handleFocus = () => {
		setIsFocus(true)
		dispatch({
			type: 'SHOW_SEARCH_RESULT'
		})
	}

	const handleBlur = () => {
		setIsFocus(false)
	}

	const handleMouseEnter = () => {
		console.log('enter')
		setIsHover(true)
	}

	const handleMouseLeave = () => {
		setIsHover(false)
	}

	const handleClickTag = keywords => {
		console.log('keywords', keywords)
		dispatch({
			type: 'SELECT_HOT_SEARCH',
			payload: keywords
		})
		setInputValue(keywords)
	}

	return (
		<Wrapper>
			<Input.Search 
				onInput={handleInput} 
				onFocus={handleFocus} 
				onBlur={handleBlur} 
				value={inputValue} 
				loading={inputValue === '' ? false : true}
				placeholder="搜索..."
			/>
			{
				isShowPannel
				? <ResultWrapper onMouseEnter={handleMouseEnter}>
					{
						inputValue === ''
						? <Hot handleClickTag={handleClickTag} />
						: <Suggest />
					}
				</ResultWrapper>
	    	: null
			}
		</Wrapper>
	)
}