import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppTextBold from './Ui/AppTextBold'

export default function TodoVIew({ todo, TodoID }) {
	return (
		<View style={ styles.cont } >
			<TouchableOpacity
				onPress={ () => TodoID(todo.id) }
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
		borderRadius: 5,
		backgroundColor: '#eee',
	},
})
