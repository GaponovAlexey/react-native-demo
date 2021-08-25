import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Navbar({ title }) {
	return (
		<View style={ styles.navbar } >
			<Text style={ styles.text }>{ title }</Text>
		</View >
	)
}

const styles = StyleSheet.create({
	navbar: {
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
	},
	text: {
		fontSize: 20,
		marginBottom: 4,
		color: '#fff',
	}
})
