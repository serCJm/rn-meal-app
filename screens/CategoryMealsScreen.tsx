import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MealNavigatorProps } from "../navigation/MealsNavigator";

type Props = {
	navigation: MealNavigatorProps;
};

const CategoriesMealScreen = (props: Props) => {
	return (
		<View style={styles.screen}>
			<Text>The CategoriesMealScreens Screen!</Text>
			<Button
				title="Go To Details!"
				onPress={() =>
					props.navigation.navigate({ routeName: "MealDetail" })
				}
			></Button>
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
