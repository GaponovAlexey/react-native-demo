import React, { useContext, useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenContext } from '../screens/screnContex'
import { TodoContext } from './todoContext'
import todoReducer from './todoReducer'
import { ADD_TODO, CLEAR_ERROR, HIDE_LOADER, REMOVE_TODO, SHOW_ERROR, SHOW_LOADER, UPDATE_TODO } from './type'

export default function TodoState({ children }) {
	const initialState = {
		todos: [],
		loading: false,
		error: null
	}
	const { changeScreen } = useContext(ScreenContext)

	const [state, dispatch] = useReducer(todoReducer, initialState)


	//const addTodo = async title => {
	//	const response = await fetch('https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
	//		method: 'POST',
	//		headers: { 'Content-Type': 'application/json' },
	//		body: JSON.stringify({ title })
	//	})
	//	const data = await response.json()
	//	console.log('Data', data);
	//	dispatch({ type: ADD_TODO, title })
	//}
	const addTodo = async title => {
		const response = await fetch("https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos.json", {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ title })
		})
		const data = await response.json()
		console.log(data.name);
		dispatch({ type: ADD_TODO, title, id: data.name })
	}




	const removeTodo = id => {
		changeScreen(null)
		dispatch({ type: REMOVE_TODO, id })
	}
	const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

	const showLoader = () => dispatch({ type: SHOW_LOADER })
	const hideLoader = () => dispatch({ type: HIDE_LOADER })
	const showError = (error) => dispatch({ type: SHOW_ERROR, error })
	const clearError = () => dispatch({ type: CLEAR_ERROR })



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
