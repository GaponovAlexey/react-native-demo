import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import EditModal from '../components/EditModal'
import AppCont from '../components/Ui/AppCont'

export default function TodoTitle({ todo, onBack, deletTOdo, backModal }) {
	const [modal, setModal] = useState(false)
	return (
		<View >
			<EditModal visible={ modal }
				backModal={ () => setModal(false) }
			/>
			<AppCont  >
				<Text>{ todo.title }</Text>
				<Button title='corect' onPress={ () => setModal(true) } />
			</AppCont>
			<View style={ styles.but }>
				<Button title='back' onPress={ onBack } />
				<Button title='delet' onPress={ () => deletTOdo(todo.id) } />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	but: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	}

})
