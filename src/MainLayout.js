import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { TodoContext } from './context/todo/todoContext';

import Navbar from './component/Navbar';
import MainScreen from './screens/MainScreen';
import ViewTodo from './screens/ViewTodo';
import { ScreenContext } from './context/screens/screnContex';

export default function MainLayout() {
	const { todos, addTodo, removeTodo, corectTodo } = useContext(TodoContext)
	const {todoID, changeScreen} = useContext(ScreenContext)



	let content = (
		<MainScreen
			addTodo={ addTodo }
			todos={ todos }
			TodoID={ changeScreen }
		/>
	)
	if (todoID) {
		const todoValue = todos.find(e => e.id = todoID)
		content = <ViewTodo todo={ todoValue }
			backMain={ () => changeScreen(null) }
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
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
});
