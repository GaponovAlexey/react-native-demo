import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import TopTodo from '../component/TopTodo'
import ViewTodo from '../component/ViewTodo'

export default function MainTodo({ todos, addTodo, onCor }) {
	return (
		<View >
			<TopTodo addTodo={ addTodo } />
			<FlatList
				data={ todos }
				renderItem={ ({ item }) => <ViewTodo todo={ item } onCor={ onCor } /> }
				keyExtractor={ item => item.id }
			/>
		</View>
	)
}

const styles = StyleSheet.create({
})
