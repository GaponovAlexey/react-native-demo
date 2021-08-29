import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, View, Button } from 'react-native'
import { THEME } from '../theme'

export default function AddTodo({ sendTodo  }) {
	const [atodo, setAtodo] = useState('')
	const addTodo = () => {
		if (atodo.trim().toString()) {
			sendTodo(atodo)
			setAtodo('')
		}
	}
	return (
		<View style={styles.cont}>
			<TextInput style={styles.inp}
			
			value={atodo}
			onChangeText={setAtodo}
			/>
			<Button title='send'
				color={ THEME.GRAY_COLOR }
				onPress={addTodo}
			/>
		</View>
	)
}

const styles = StyleSheet.create({ 
	cont: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15,
		backgroundColor: '#eee',


	},
	inp: {
		borderBottomWidth: 2,
		width: '80%',
		borderColor: THEME.MAIN_COLOR,

	}
})
