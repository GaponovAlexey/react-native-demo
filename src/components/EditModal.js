import React from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'

export default function EditModal({ visible, backModal }) {
	return (
		<Modal visible={ visible } >
			<View style={styles.conteiner} >
				<View style={ styles.inp }>
					<TextInput placeholder='texp please' />
				</View>
				<View style={ styles.modal }>
					<Button title='corect' />
					<Button title='back' onPress={ backModal } />
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
