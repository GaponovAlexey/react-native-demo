import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'

export default function EditModal({ visible, value, onBack, corectTodo }) {
	const [title, settitle] = useState(value)


	return (
		<View>
			<Modal
				visible={ visible }
			>
				<View style={ styles.inp } >
					<TextInput
						value={ title }
						onChangeText={ settitle }
						placeholder='corect todo'

					/>
				</View>
				<View style={ styles.but } >
					<Button title='back' onPress={ onBack } />
					<Button title='corect' onPress={ () => corectTodo(title) } />
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	but: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 5,
	},
	inp: {
		padding: 8,
		borderBottomWidth: 2,

	}
})
