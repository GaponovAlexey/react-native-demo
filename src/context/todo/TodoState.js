import React, { useContext, useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenContext } from '../screens/screnContex'
import { TodoContext } from './todoContext'
import todoReducer from './todoReducer'
import { ADD_TODO, CLEAR_ERROR, FETCH_TODOS, HIDE_LOADER, REMOVE_TODO, SHOW_ERROR, SHOW_LOADER, UPDATE_TODO } from './type'
const url = 'https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos.json'

import { Http } from '../../http'



export default function TodoState({ children }) {

	const initialState = {
		todos: [],
		loading: false,
		error: null
	}
	const { changeScreen } = useContext(ScreenContext)

	const [state, dispatch] = useReducer(todoReducer, initialState)


	//addTodo
	const addTodo = async title => {
		clearError()
		try {
			const data = await Http.post(url, { title })
			dispatch({ type: ADD_TODO, title, id: data.name })
		} catch (e) {
			showError('бабах')
		} 
	}

	//remove
	const removeTodo = async id => {
		changeScreen(null)
		await fetch(`https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
			method: 'DELETE',
			headers: { 'Content-type': 'application/json' },
		})
		dispatch({ type: REMOVE_TODO, id })
	}

	//update
	const updateTodo = async (id, title) => {
		clearError()
		try {
			await fetch(`https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
				method: 'PATCH',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({ title })
			})
			dispatch({ type: UPDATE_TODO, id, title })
		} catch (e) {
			showError('ЧТТТО ТО пошло НЕ так')
			console.log(e);
		}
	}



	const showLoader = () => dispatch({ type: SHOW_LOADER })
	const hideLoader = () => dispatch({ type: HIDE_LOADER })
	const showError = (error) => dispatch({ type: SHOW_ERROR, error })
	const clearError = () => dispatch({ type: CLEAR_ERROR })

	//fetch
	const fetchTodo = async () => {
		showLoader()
		clearError()
		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: { 'Content-type': 'application/json' },
			})
			const data = await response.json()
			const todos = Object.keys(data).map(e => ({ ...data[e], id: e }))
			setTimeout(() => dispatch({ type: FETCH_TODOS, todos }), 2000)
		} catch (e) {
			showError('ЧТТТО ТО пошло НЕ так')
			console.log(e);
		} finally {
			hideLoader()
		}
	}


	return (
		<TodoContext.Provider
			key={ state.todos.id }
			value={ {
				todos: state.todos,
				loading: state.loading,
				error: state.error,
				addTodo, removeTodo, updateTodo,
				fetchTodo
			} }
		>{ children }</TodoContext.Provider>
	)
}

const styles = StyleSheet.create({})
