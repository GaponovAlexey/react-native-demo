import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navbar from './component/Navbar'
import { TodoContext } from './context/todo/todoContext'
import MainScreen from './screens/MainScreen'
import ViewTodo from './screens/ViewTodo'

export default function MainLayout() {
	const todoContext = useContext(TodoContext)
	const [validID, setValid] = useState(null)
	const [todos, setTodos] = useState([])

	const addTodo = title => {
		setTodos(todo => [{
			id: Date.now().toString(),
			title
		}, ...todo])
	}

	let corectTodo = (id, title) => {
		setTodos(old => old.map(todo => {
			if (todo.id === id) {
				todo.title = title
			}
			return todo
		}))
	}

	let removeTodo = (id) => {
		setTodos(old => old.filter(e => e.id !== id))
		setValid(null)
	}

	let content = (
		<MainScreen
			addTodo={ addTodo }
			todos={ todoContext.todos && todos }
			TodoID={ setValid }
		/>
	)
	if (validID) {
		const todoValue = todos.find(e => e.id = validID)
		content = <ViewTodo todo={ todoValue }
			backMain={ () => setValid(null) }
			corectTodo={ corectTodo }
			deletTodo={ removeTodo }
		/>
	}

	return (
		<View>
			<Navbar />
			<View style={ styles.container }>
				{ content }
			</View>
		</View >
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
})
