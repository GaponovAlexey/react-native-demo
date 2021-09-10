import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import EditModal from '../component/EditModal'
import AppButton from '../component/Ui/AppButton'
import AppTextBold from '../component/Ui/AppTextBold'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function ViewTodo({ visible, todo, onBack, backMain, corectTodo, deletTodo }) {
	const [visib, setVisib] = useState(false)
	const corect = (title) => {
		corectTodo(todo.id, title)
		setVisib(false)
	}

	return (
		<View>
			<EditModal
				value={ todo.title }
				visible={ visib }
				corectTodo={ corect }
				onBack={ () => setVisib(false) } />
			<View style={ styles.cont } >
				<AppTextBold>{ todo.title }</AppTextBold>
				<AntDesign name='edit' size={ 25 } onPress={ () => setVisib(true) } />
			</View>
			<View style={ styles.but } >
				<Entypo onPress={ backMain } name='back' size={ 40 } />
				<AppButton onPress={ () => deletTodo(todo.id) } >cor</AppButton>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
		backgroundColor: '#eee',
		borderRadius: 5,
		elevation: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 5,

	},
	but: {
		padding: 5,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})
