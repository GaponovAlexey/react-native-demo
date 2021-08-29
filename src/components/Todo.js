import React from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'

export default function Todo({ todo, removeTodo, onOpen }) {
	const deletTodo = () => {
		removeTodo(todo.id)
	}
	return (
		<TouchableOpacity onLongPress={ deletTodo }
			onPress={ () => onOpen(todo.id) }
		>
			<View style={ styles.conteiner }>
				<Text style={ styles.text } >{ todo.title }</Text>
			</View>
		</TouchableOpacity>
	)
}
const das = (dasd) => {dad}


const styles = StyleSheet.create({
	conteiner: {
		padding: 5,
		borderRadius: 5,
		backgroundColor: '#eee',
		borderStyle: 'solid',
		marginBottom: 2,

	},
	text: {
		padding: 10,
	}
})
