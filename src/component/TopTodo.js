import React, { useState } from 'react'
import { Button, StyleSheet, Keyboard, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TopTodo({ addTodo }) {
	const [state, setState] = useState('')

	const sendTodo = () => {
		if (state.trim()) {
			addTodo(state)
			setState('')
			Keyboard.dismiss()
			Keyboard.scheduleLayoutAnimation(true)
		}
	}

	return (
		<View style={ styles.cont } >
			<View style={ styles.inp } >
				<TextInput
					value={ state }
					onChangeText={ setState }
					style={ styles.input } placeholder="todo here" />
				<MaterialCommunityIcons.Button onPress={ sendTodo } name="heart-plus-outline" size={ 22 } color="#ccc" >
					Enter
				</MaterialCommunityIcons.Button>
				{/*<Button  />*/ }
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
		width: '100%',
	},
	but: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	input: {
		borderBottomWidth: 2,
		width: '80%',
	},
	inp: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	}
})
