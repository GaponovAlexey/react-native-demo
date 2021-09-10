import React, { useReducer } from 'react'
import { CHANGE_SCREEN } from '../todo/type'
import { screenReducer } from './screenReducer'
import { ScreenContext } from './screnContex'


export default function ScrenState({ children }) {

	const [state, dispatch] = useReducer(screenReducer, null)
	const changeScreen = id => dispatch({ type: CHANGE_SCREEN, payload: id })
	return (
		<ScreenContext.Provider
			value={ {
				changeScreen,
				todoID: state
			} }
		>{ children }</ScreenContext.Provider>
	)
}

