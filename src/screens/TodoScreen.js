import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import AppCard from '../components/Ui/AppCard'
import { THEME } from '../theme'

export default function TodoScreen({ onBack, todo }) {



	return (
		<View >
			<AppCard style={styles.card} >
				<Text style={ styles.text } >{ todo.title }</Text>
				<Button title="edit" />
			</AppCard>
			<View style={ styles.conteiner } >
				<View style={ styles.but1 }>
					<Button title='Back' color={ THEME.GRAY_COLOR } onPress={ onBack } />
				</View>
				<View style={ styles.but2 } >
					<Button title='delet' color={ THEME.DANGER_COLOR } onPress={ () => Alert.alert('delet') } />
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
		fontSize: 20,
	},
	but1: {
		width: '40%',
		shadowColor: '#ff0000',
	},
	but2: {
		width: '40%',

	},
	card: {
		marginBottom: 20,
		padding: 15,
	}
})
