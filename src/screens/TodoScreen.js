import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'

export default function TodoScreen({  onBack, todo, removeTodo }) {



	return (
		<View >
			<Text style={ styles.text } >{ todo.title }</Text>
			<View style={ styles.conteiner } >
				<View style={styles.but1}>
				<Button title='Back' color='#757575' onPress={ onBack } />
				</View>
				<View style={styles.but2} >
				<Button title='delet' color='#e53935' onPress={() => Alert.alert('delet') } />
				</View>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	conteiner: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text: {
		backgroundColor: '#eee',
		borderRadius: 5,
		fontSize: 17,
		paddingBottom: 10,
	},
	but1: {
		width: '40%',
		shadowColor: '#ff0000',
	},
	but2: {
		width: '40%',
		
	}
})
