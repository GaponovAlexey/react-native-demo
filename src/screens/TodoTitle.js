import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import EditModal from '../components/EditModal'
import AppCont from '../components/Ui/AppCont'

export default function TodoTitle({ todo, onBack, deletTOdo, backModal, corectSend }) {
	const [modal, setModal] = useState(false)
	const onEditCorect = title => {
		corectSend(todo.id, title)
		setModal(false)
	}
	return (
		<View >
			<EditModal
			value={todo.title}
				onCorect={ onEditCorect }
				visible={ modal }
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
