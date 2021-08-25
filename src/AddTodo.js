import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'

export function AddTodo({ onSubmit }) {
	const [value, setValue] = useState('')
	const click = e => {
		if (value.trim()) {
			onSubmit(value)
			setValue('')
		}
	}


	return (
		<View style={ styles.addb }>
			<TextInput
				value={ value }
				onChangeText={ setValue }
				style={ styles.text } />
			<Button title='send' onPress={ click } />
		</View>
	)
}

const styles = StyleSheet.create({
	addb: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text: {
		width: '70%',
		borderBottomWidth: 2,
	}
})
