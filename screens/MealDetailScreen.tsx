import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MealNavigatorProps } from "../navigation/MealsNavigator";

type Props = {
	navigation: MealNavigatorProps;
};

const MealDetailScreen = (props: Props) => {
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
