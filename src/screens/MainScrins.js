import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'

export default function MainScrins({ onSubmit, todos, onOpen, removeTodo }) {
	return (
		<View>
			<AddTodo onSubmit={ onSubmit } />
			<FlatList
				data={ todos }
				renderItem={ ({ item }) => <Todo
					removeTodo={ removeTodo }
					todo={ item }
					onOpen={ onOpen }
				/> }
				keyExtractor={ item => item.id }
			/>
		</View>
	)
}

const styles = StyleSheet.create({})
