import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CATEGORIES } from "../data/data";
import Category from "../models/category";
import { NavigationScreenComponent } from "react-navigation";
import {
	NavigationStackScreenProps,
	NavigationStackOptions,
} from "react-navigation-stack";

type Params = {};

type ScreenProps = {};

const CategoriesMealScreen: NavigationScreenComponent<Params, ScreenProps> = (
	props
) => {
	const catId = props.navigation.getParam("categoryId");

	const selectedCategory: Category | undefined = CATEGORIES.find(
		(cat) => cat.id === catId
	);
	return (
		<View style={styles.screen}>
			<Text>The CategoriesMealScreens Screen!</Text>
			<Text>{selectedCategory?.title}</Text>
			<Button
				title="Go To Details!"
				onPress={() =>
					props.navigation.navigate({ routeName: "MealDetail" })
				}
			></Button>
			<Button
				title="Go Back!"
				onPress={() => props.navigation.goBack()}
			></Button>
		</View>
	);
};

CategoriesMealScreen.navigationOptions = (
	navigationData: NavigationStackScreenProps
): NavigationStackOptions => {
	const catId = navigationData.navigation.getParam("categoryId", "None");
	const selectedCategory: Category | undefined = CATEGORIES.find(
		(cat) => cat.id === catId
	);
	return {
		headerTitle: selectedCategory?.title,
	};
};

export default CategoriesMealScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
