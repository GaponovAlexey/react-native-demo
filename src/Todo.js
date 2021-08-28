import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Todo({ todo }) {
	return (
		<View>
			<Text>{ todo.title }</Text>
		</View>
	)
}

const styles = StyleSheet.create({})
