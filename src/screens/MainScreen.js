import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import TodoVIew from '../component/TodoVIew'
import TopTodo from '../component/TopTodo'

export default function MainScreen({ todos, TodoID, addTodo }) {
	return (
		<View>
			<TopTodo addTodo={ addTodo } />
			<View style={styles.cont}>
				<FlatList
					data={ todos }
					keyExtractor={ item => item.id }
					renderItem={ ({ item }) =>
						<TodoVIew
							TodoID={ TodoID }
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
