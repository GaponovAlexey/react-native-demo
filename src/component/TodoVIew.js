import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import AppTextBold from './Ui/AppTextBold'

export default function TodoVIew({ todo, TodoID, remove }) {
	return (
		<View style={ styles.cont } >
			<TouchableOpacity
				onPress={ () => TodoID(todo.id) }
				onLongPress={() => remove(todo.id)}
			>
				<AppTextBold >{ todo.title }</AppTextBold>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
		padding: 13,
		margin: 2,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		backgroundColor: '#eee',
	},
})
