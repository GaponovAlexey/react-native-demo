import React, { useContext, useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenContext } from '../screens/screnContex'
import { TodoContext } from './todoContext'
import todoReducer from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './type'

export default function TodoState({ children }) {
	const initialState = {
		todos: [
			{ id: '1', title: 'my APP the best' },
			{ id: '2', title: 'my blokchain the best' },
		]
	}
	const { changeScreen } = useContext(ScreenContext)

	const [state, dispatch] = useReducer(todoReducer, initialState)

	const addTodo = title => dispatch({ type: ADD_TODO, title })

	const removeTodo = id => {
		changeScreen(null)
		dispatch({ type: REMOVE_TODO, id })
	}
	const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

	return (
		<TodoContext.Provider
			key={ state.todos.id }
			value={ {
				todos: state.todos,
				addTodo, removeTodo, updateTodo
			} }
		>{ children }</TodoContext.Provider>
	)
}

const styles = StyleSheet.create({})
