import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export const AppLoade = () => (
	<View style={ styles.center } >
		<ActivityIndicator size="large" color="#0f0" />
	</View >
)

const styles = StyleSheet.create({
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},

})
