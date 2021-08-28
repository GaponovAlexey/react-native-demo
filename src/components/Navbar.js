import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Navbar({ title }) {
	return (
		<View style={ styles.container }>
			<Text style={ styles.text }>{ title }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 30,
		backgroundColor: '#ccc',
	},
	text: {
		fontSize: 20,
	}
})
