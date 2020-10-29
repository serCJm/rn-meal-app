import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props {
	children: React.ReactNode
}

const DefaultText = (props: Props) => {
	return (
			<Text style={styles.text}>{props.children}</Text>
	)
}

export default DefaultText

const styles = StyleSheet.create({
	text: {
		fontFamily: 'open-sans'
	}
})
