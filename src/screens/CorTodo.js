import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import EditModal from '../component/EditModal'

export default function CorTodo({ todo, back, editTitle }) {
	const [value, setValue] = useState(false)
	let corTitle = (title) => {
		editTitle(todo.id, title)
		setValue(false)
	}
	return (
		<View>
			<EditModal
				visible={ value }
				backMod={ () => setValue(false) }
				todo={ todo.title }
				editTitle={ corTitle }
			/>
			<View style={ styles.cont } >
				<View style={ styles.text } >
					<Text>
						{ todo.title }
					</Text>
				</View>
				<View style={ styles.but } >
					<Button title='back' onPress={ back } />
					<Button title='corect' onPress={ () => setValue(true) } />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
	},
	text: {
		flexDirection: 'row',
		marginBottom: 5,
		padding: 11,
		borderRadius: 3,
		backgroundColor: '#ccc'
	},
	but: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})
