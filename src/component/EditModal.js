import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'

export default function EditModal({ visible, backMod, todo, editTitle }) {

	const [title, settitle] = useState(todo)
	
	return (
		<View>
			<Modal
				visible={ visible }
			>
				<View style={ styles.inp } >
					<TextInput
						value={ title }
						onChangeText={ settitle }
						placeholder='text'
					/>
				</View>
				<View style={ styles.but }>
					<Button title='back' onPress={ backMod } />
					<Button title='save' onPress={() => editTitle(title)} />
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	but: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
	},
	inp: {
		padding: 5,
		borderBottomWidth: 2,
	}
})
