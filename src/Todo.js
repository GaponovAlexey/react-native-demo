import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Todo({ todo, onRemove }) {

	return (
		<View style={ { ...styles.todos } }  >
			<Text>{ todo.title }</Text>
			<Button style={styles.text} title='delet' onPress={ () => onRemove(todo.id) } />
		</View>
	)
}

const styles = StyleSheet.create({
	todos: {
		flexDirection: 'row',
		justifyContent: 'space-between',

		backgroundColor: '#eee',
		borderRadius: 1,
		padding: 10,
		marginBottom: 6,
		
		
	},
	text: {
		justifyContent: 'flex-end',
		flexDirection: 'row',

	}
})
