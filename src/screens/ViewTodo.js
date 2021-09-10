import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import EditModal from '../component/EditModal'
import AppButton from '../component/Ui/AppButton'
import AppTextBold from '../component/Ui/AppTextBold'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screens/screnContex'

export default function ViewTodo() {

	const { todos, removeTodo, updateTodo } = useContext(TodoContext)
	const { todoID, changeScreen } = useContext(ScreenContext)

	const todo = todos.find(todo => todo.id === todoID)
	const [modal, setModal] = useState(false)

	const corect = (title) => {
		updateTodo(todo.id, title)
		setModal(false)
	}
	return (
		<View>
			<EditModal
				value={ todo.title }
				visible={ modal }
				corectTodo={ corect }
				onBack={ () => setModal(false) } />
			<View style={ styles.cont } >
				<AppTextBold>{ todo.title }</AppTextBold>
				<AntDesign name='edit' size={ 25 } onPress={ () => setModal(true) } />
			</View>
			<View style={ styles.but } >
				<Entypo onPress={ () => changeScreen(null) } name='back' size={ 40 } />
				<AppButton onPress={ () => removeTodo(todo.id) } >cor</AppButton>
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
