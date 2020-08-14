import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const FiltersScreen = (props: Props) => {
	return (
		<View style={styles.screen}>
			<Text>The FiltersScreen Screen!</Text>
		</View>
	);
};

export default FiltersScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
