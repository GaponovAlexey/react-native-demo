import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function TodoTitle({ todo, onBack }) {
	return (
		<View style={ styles.mainconteiner }>
			<Text>{todo.title}</Text>
			<Button title='back' onPress={onBack} />
		</View>
	)
}

const styles = StyleSheet.create({
	mainconteiner: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
})
