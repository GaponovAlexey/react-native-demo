import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

export const AddTodo = ({ onSubmit }) => {

	//const [value, setValue] = useState('')

	//const pressHandler = () => {
	//	if (value.trim()) {
	//		onSubmit(value)
	//		setValue('')
	//	}
	//}

	const [value, setValue] = useState('')
	const pressHandler = () => {
		if(value.trim()){
			onSubmit(value)
			setValue('')
		}
	}

	return (
		<View style={ styles.block }>
			<TextInput style={ styles.input }
				onChangeText={ setValue }
				value={ value }
				placeholder='Веведите название'
			/>
			<Button onPress={ pressHandler } title='Добавить' />
		</View>
	)
}





const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	input: {
		width: '70%',
		padding: 10,
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: '#3949ab',
	}
})
