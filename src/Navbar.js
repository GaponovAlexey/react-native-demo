import React from 'react'
import { ColorPropType, StyleSheet, Text, View } from 'react-native'

export default function Navbar({ title }) {
	return (
		<View style={ styles.container }>
			<Text style={ styles.text }>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
		alignItems: 'center',
		backgroundColor: '#000',
	},
	text: {
		color: '#fff',
		fontSize: 16,
	}
})
