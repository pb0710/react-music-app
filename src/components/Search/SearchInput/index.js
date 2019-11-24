import React, { useState, useEffect } from 'react'
import { Wrapper, Input } from './style'
import {Icon} from 'antd'

export default function SearchInput(props) {
	const { handleInput, handleFocus, handleBlur, inputValue, isFocus } = props
	return (
		<Wrapper>
			<Input 
				onChange={handleInput} 
				onFocus={handleFocus} 
				onBlur={handleBlur} 
				value={inputValue} 
				isFocus={isFocus}
				placeholder={isFocus ? '' :'搜索...'}
			/>
		</Wrapper>
	)
}