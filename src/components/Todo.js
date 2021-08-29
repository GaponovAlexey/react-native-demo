import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../theme'

export default function Todo({ todo, removeTodo }) {
	return (
		<TouchableOpacity
			onLongPress={ () => removeTodo(todo.id) }

		>
			<Text style={ styles.block }>{ todo }</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	block: {
		padding: 15,
		backgroundColor: '#EB5BAF',
		borderRadius: 5,
		marginBottom: 5,
	}
})
