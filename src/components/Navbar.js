import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { THEME } from '../theme'

export default function Navbar({ title }) {
	return (
		<View style={ styles.container }>
			<Text style={ styles.text }>{ title }</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: 'center',
		padding: 40,
		backgroundColor: THEME.MAIN_COLOR,
	},
	text: {
		fontSize: 30,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignSelf: 'center',
	}
})
