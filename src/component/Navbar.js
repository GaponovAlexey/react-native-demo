import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Navbar() {
	return (
		<View style={ styles.cont } >
			<Text style={ styles.text }>Title</Text>
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
