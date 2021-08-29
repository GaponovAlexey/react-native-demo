import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Todo from '../components/Todo'

export default function TodoTitle({ todo }) {
	return (
		<View>
			<Text>{todo.title}</Text>
			<Button title='back' />
		</View>
	)
}

const styles = StyleSheet.create({})
