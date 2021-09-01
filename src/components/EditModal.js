import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import { THEME } from '../theme'

export default function EditModal({ visible, backModal, value, onCorect }) {
	const [title, setTitle] = useState(value)

	return (
		<Modal visible={ visible } >
			<View style={ styles.conteiner } >
				<View style={ styles.inp }>
					<TextInput
						value={ title }
						onChangeText={ setTitle }
						placeholder='texp please'
						autoCapitalize='none'
					/>
				</View>
				<View style={ styles.modal }>
					<Button title='corect' color={ THEME.GRAY_COLOR } onPress={() => onCorect(title)}/>
					<Button title='back' onPress={ backModal } color={ THEME.DANGER_COLOR } />
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	conteiner: {
		flex: 1,
		justifyContent: 'center',
	},
	modal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	inp: {
		width: '70%',
		alignSelf: 'center',
		alignItems: 'center',
		borderBottomWidth: 2,
		marginBottom: 5,
	}
})
