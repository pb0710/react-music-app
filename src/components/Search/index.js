import React, { useState, useEffect, useMemo } from 'react'
import { Wrapper, ResultWrapper } from './style'
import { useMappedState, useDispatch } from 'redux-react-hook'
import SearchInput from './SearchInput'
import Hot from './Hot'
import Suggest from './Suggest'

export default function Search() {
	const { searchSuggest } = useMappedState(state => ({
		searchSuggest: state.header.searchSuggest
	}))
	const { order } = searchSuggest

	const dispatch = useDispatch()

	const [inputValue, setInputValue] = useState('')
	const [isFocus, setIsFocus] = useState(false)
	const [isHover, setIsHover] = useState(false)

	const isShowPannel = useMemo(() => isFocus || isHover)

	const handleFocus = () => {
		setIsFocus(true)
		setInputValue('')
	}

	const handleBlur = () => {
		setIsFocus(false)
		setInputValue('')
	}

	const handleMouseEnter = () => {
		setIsHover(true)
	}

	const handleMouseLeave = () => {
		console.log('leave')
		setIsHover(false)
	}

	const handleClickTag = keywords => {
		dispatch({
			type: 'SELECT_HOT_SEARCH',
			payload: keywords
		})
		setInputValue(keywords)
	}

	const handleInput = e => {
		const value = e.currentTarget.value
		setInputValue(value)
		dispatch({
			type: 'FETCH_SEARCH_RESULT',
			payload: value
		})
	}

	return (
		<Wrapper>
			<SearchInput isFocus={isFocus} inputValue={inputValue}
				handleInput={handleInput} 
				handleFocus={handleFocus} 
				handleBlur={handleBlur}
			/>
			{
				isShowPannel
				? <ResultWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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