import React from 'react'
import { StyleSheet, View } from 'react-native'

export default AppCont = (props) => (
	<View style={{ ...styles.sty, ...props.styles }}>{ props.children }</View>
)

const styles = StyleSheet.create({
	sty: {
		backgroundColor: '#ccc',
		padding: 20,
		borderRadius: 5,
		elevation: 11,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 3,
	},
})
