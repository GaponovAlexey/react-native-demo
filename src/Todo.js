import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native'

export default function Todo({ todo, onRemove }) {
	return (
		<TouchableOpacity >
			<View style={ styles.todo }>
				<Text>{ todo.title }</Text>
				<Button title='delet' onPress={ () => onRemove(todo.id) } />
			</View>
		</TouchableOpacity >
	)
}

const styles = StyleSheet.create({
	todo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 15,
		borderRadius: 5,
		borderColor: '#eee',
		borderWidth: 1,
		marginBottom: 2,
	}
})
