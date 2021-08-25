import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, View, ScrollView } from 'react-native'

export function AddTodo({ onSubmit }) {
	const [value, setValue] = useState('')
	const click = e => {
		if (value.trim()) {
			onSubmit(value)
			setValue('')
		}
	}

	return (
		<View style={ styles.wraper }>
				<TextInput style={ styles.input }
					value={ value }
					onChangeText={ setValue }
					placeholder='text'
					autoCorrect={ false }
					autoCapitalize='none'
					keyboardType='default'
				/>
			<Button title='Send' onPress={ click } />
		</View>
	)
}

const styles = StyleSheet.create({
	wraper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	input: {
		padding: 10,
		borderBottomWidth: 2,
		width: '80%',
	}
})

