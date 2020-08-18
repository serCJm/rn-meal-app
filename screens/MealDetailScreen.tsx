import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";

type Params = {};

type ScreenProps = {};

const MealDetailScreen: NavigationStackScreenComponent = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The MealDetailScreen Screen!</Text>
			<Button
				title="Go Back To Categories!"
				onPress={() => props.navigation.popToTop()}
			></Button>
		</View>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
