import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'

export default function MainApp({ addTodo, todos,  }) {
	return (
		<View>
			<AddTodo
				style={ styles.inp }
				sendTodo={ addTodo } />
			<View style={ styles.container }>
				<FlatList
					data={ todos }
					renderItem={ ({ item }) => <Todo todo={ item.title } /> }
					keyExtractor={ item => item.id }
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({


})
