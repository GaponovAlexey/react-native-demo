import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { THEME } from '../theme'

export default function Navbar({title}) {
	return (
		<View style={styles.conteiner}>
			<Text style={styles.text}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	conteiner: {
		flex: 1,
		backgroundColor: THEME.MAIN_COLOR,
		padding: 30,
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
	}
})