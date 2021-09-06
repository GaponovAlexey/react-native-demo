import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTextBold from './Ui/AppTextBold'

export default function Navbar() {
	return (
		<View style={ styles.cont } >
			<AppTextBold style={ styles.text }>Title</AppTextBold>
		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
		flexDirection: 'row',
		padding: 20,
		justifyContent: 'center',
		backgroundColor: '#ccc',
	},
	text: {
		fontSize: 20,
	}
})
