import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function TodoScreen({ onBack, todo }) {
	return (
		<View>
			<Text>{ todo.title}</Text>
			<Button title='Back' onPress={ onBack } />
		</View>
	)
}

const styles = StyleSheet.create({})
