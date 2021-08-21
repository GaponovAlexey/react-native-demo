

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Navbar({ title }) {
	return (
		<View style={ styles.navbar }>
			<Text style={ styles.text }>{ title }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		height: 60,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: '#3949ab',
		paddingBottom: 10,
	},
	text: {
		color: '#fff'
	}

})
