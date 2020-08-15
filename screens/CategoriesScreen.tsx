import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MealNavigatorProps } from "../navigation/MealsNavigator";

type Props = {
	navigation: MealNavigatorProps;
};

const CategoriesScreen = (props: Props) => {
	return (
		<View style={styles.screen}>
			<Text>The Categories Screen!</Text>
			<Button
				title="Go To Meals!"
				onPress={() =>
					props.navigation.navigate({ routeName: "CategoryMeals" })
				}
			></Button>
		</View>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
