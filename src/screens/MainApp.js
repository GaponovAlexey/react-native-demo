import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'

export default function MainApp({ addTodo, todos, removeTodo}) {
	return (
		<View>
			<AddTodo sendTodo={ addTodo } />
			<FlatList
				data={ todos }
				renderItem={ ({ item }) => <Todo removeTodo={ removeTodo }  todo={ item.title } /> }
				keyExtractor={ item => item.id }
			/>
		</View>
	)
}

const styles = StyleSheet.create({


})
