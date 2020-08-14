import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const FavoritesScreen = (props: Props) => {
	return (
		<View style={styles.screen}>
			<Text>The FavoritesScreen Screen!</Text>
		</View>
	);
};

export default FavoritesScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
