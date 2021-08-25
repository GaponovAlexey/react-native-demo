import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Todo({ todo, onRemove }) {
	return (
		<TouchableOpacity
			activeOpacity={ 0.5 }
			onPress={ () => console.log('Pressed', todo.id) }
			onLongPress={() => onRemove(todo.id)}
		>
			<View style={ styles.todo }>
				<Text >{ todo.title }</Text>
			</View>
		</TouchableOpacity>
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
