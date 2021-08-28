import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'

export default function MainScrins({ addTodo, todos, removeTodo  }) {
	return (
		<View>
			<AddTodo onSubmit={ addTodo } />
			<FlatList
				data={ todos }
				renderItem={ ({ item }) => <Todo removeTodo={ removeTodo } todo={ item } /> }
				keyExtractor={ item => item.id.toString() }
			/>
		</View>
	)
}

const styles = StyleSheet.create({})
