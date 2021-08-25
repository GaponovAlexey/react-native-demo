import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Todo({ todo }) {
	return (
		<View style={ styles.todo }>
			<Text >{ todo.title }</Text>
		</View>
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
