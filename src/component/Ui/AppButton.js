import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../THEME.js'
import AppTextBold from './AppTextBold'


export default function AppButton({ children, onPress, color = THEME.MAIN_COLOR }) {
	return (
		<TouchableOpacity
			onPress={ onPress }
		>
			<View style={ { ...styles.button, backgroundColor: color } } >
				<AppTextBold>
					{ children }
				</AppTextBold>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	}
})
