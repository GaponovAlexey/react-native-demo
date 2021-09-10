import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import TodoVIew from '../component/TodoVIew'
import TopTodo from '../component/TopTodo'
import { ScreenContext } from '../context/screens/screnContex'
import { TodoContext } from '../context/todo/todoContext'

export default function MainScreen() {
	const { todos, addTodo } = useContext(TodoContext)
	const { changeScreen } = useContext(ScreenContext)
	return (
		<View>
			<TopTodo addTodo={ addTodo } />
			<View style={ styles.cont }>
				<FlatList
					data={ todos }
					keyExtractor={ item => item.id }
					renderItem={ ({ item }) =>
						<TodoVIew
							TodoID={ changeScreen }
							todo={ item } /> }
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
		flexDirection: 'row',
		justifyContent: 'center',
		height: 650,
	}
})
