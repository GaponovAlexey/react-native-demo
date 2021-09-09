import React, { useReducer } from 'react'
//import { StyleSheet } from 'react-native'
//import { TodoContext } from './todoContext'
//import { todoReducer } from './todoReducer'

//import { useReducer } from "react"
import { TodoContext } from "./todoContext"
import { todoReducer } from "./todoReducer"

//export default function TodoState({ children }) {
//	const initialState = {
//		todos: [
//			{ id: '1', title: 'my APP' },
//			{ id: '3', title: 'my APP' },
//		]
//	}
//	const [state, dispatch] = useReducer(todoReducer, initialState)
//	return (
//		<TodoContext.Provider
//			value={ {
//				todos: state.todos
//			} }
//		>{ children }</TodoContext.Provider>
//	)
//}


//const styles = StyleSheet.create({})
export default function TodoState({ children }) {
	const initialState = {
		todos: [
			{ id: '1', title: 'my APP' },
			{ id: '3', title: 'my APP best' },
		]
	}
	const [state, dispatch] = useReducer(todoReducer, initialState)
	return (
		<TodoContext.Provider value={ { todos: state.todos } } >{ children }</TodoContext.Provider>
	)
}
