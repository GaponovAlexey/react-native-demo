import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'

export default function AddTodo({ onSubmit }) {

	const [value, setValue] = useState('')

	const PressTodo = () => {
		if (value.trim()) {
			onSubmit(value)
			setValue('')
		}
	}

	return (
		<View style={ styles.cont }  >
			<TextInput
				value={ value }
				onChangeText={ setValue }
				placeholder='text'
				style={ styles.inp } />
			<Button onPress={ PressTodo } title='size' />
		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	inp: {
		borderBottomWidth: 2,
		width: '70%',
	}
})
