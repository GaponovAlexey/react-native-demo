import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { TodoContext } from './context/todo/todoContext';

import Navbar from './component/Navbar';
import MainScreen from './screens/MainScreen';
import ViewTodo from './screens/ViewTodo';
import { ScreenContext } from './context/screens/screnContex';

export default function MainLayout() {
	const { todoID } = useContext(ScreenContext)

	return (
		<View>
			<Navbar />
			<View style={ styles.container }>
				{ todoID ? <ViewTodo /> : <MainScreen /> }
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
});
