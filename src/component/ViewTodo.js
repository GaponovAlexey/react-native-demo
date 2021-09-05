import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ViewTodo({ todo, onCor }) {
	return (
		<TouchableOpacity
			onPress={ () => onCor(todo.id) }
		>
			<View style={ styles.cont } >
				<Text >
					{ todo.title }
				</Text>
				<Button title='edit' />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	cont: {
		flexDirection: 'row',
		backgroundColor: '#eee',
		justifyContent: 'space-between',
		marginBottom: 5,
		borderRadius: 5,
		elevation: 1,
		padding: 7,
		alignItems: 'center',
	}
})
