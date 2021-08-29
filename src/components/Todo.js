import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { THEME } from '../theme'

export default function Todo({todo}) {
	return (
		<View>
			<Text style={ styles.block}>{todo}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		padding: 15,
		backgroundColor: '#EB5BAF',
		borderRadius: 5,
		marginBottom: 5,
	}
})
