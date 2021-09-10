import React, { useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TodoContext } from './todoContext'
import todoReducer from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './type'

export default function TodoState({ children }) {
	const initialState = {
		todos: [
			{ id: '1', title: 'my APP the best' }
		]
	}
	const [state, dispatch] = useReducer(todoReducer, initialState)

	const addTodo = title => dispatch({ type: ADD_TODO, title })
	const removeTodo = id => dispatch({ type: REMOVE_TODO, id })
	const corectTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

	return (
		<TodoContext.Provider
			key={ state.todos.id }
			value={ {
				todos: state.todos,
				addTodo, removeTodo, corectTodo
			} }
		>{ children }</TodoContext.Provider>
	)
}

const styles = StyleSheet.create({})
