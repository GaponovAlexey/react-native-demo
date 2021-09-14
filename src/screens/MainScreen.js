import React, { useCallback, useContext, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import TodoVIew from '../component/TodoVIew'
import TopTodo from '../component/TopTodo'
import { AppLoade } from '../component/Ui/AppLoade'
import AppTextBold from '../component/Ui/AppTextBold'
import { ScreenContext } from '../context/screens/screnContex'
import { TodoContext } from '../context/todo/todoContext'

export default function MainScreen() {
	const { todos, addTodo, fetchTodo, loading, error } = useContext(TodoContext)
	const { changeScreen } = useContext(ScreenContext)

	const loadTodos = useCallback(async () => await fetchTodo(), [fetchTodo])
	useEffect(() => { loadTodos() }, [])

	if (loading) {
		return <AppLoade />
	}
	if (error) {
		return <View><AppTextBold>{error}</AppTextBold></View>
	}

	const content = (
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


	return (
		<View>
			{ content }
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
