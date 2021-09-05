import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function TopTodo({ addTodo }) {
	const [title, setTitle] = useState('')
	const sendTodo = () => {
		if (title.trim()) {
			addTodo(title)
			setTitle('')
		}
	}

	return (
		<View style={ styles.cont } >
			<TextInput
				style={ styles.text }
				value={ title }
				onChangeText={ setTitle }
				placeholder='todo here'
			/>
			<Button title='cend' onPress={ sendTodo } />
		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 11,
	},
	text: {
		borderBottomWidth: 2,
		width: '75%',
	}
})
