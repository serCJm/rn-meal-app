import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const CategoriesMealScreen = (props: Props) => {
	return (
		<View style={styles.screen}>
			<Text>The CategoriesMealScreens Screen!</Text>
		</View>
	);
};

export default CategoriesMealScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
