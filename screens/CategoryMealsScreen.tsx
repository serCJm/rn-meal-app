import React from "react";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/data";
import Category from "../models/category";
import { NavigationScreenComponent } from "react-navigation";
import {
	NavigationStackScreenProps,
	NavigationStackOptions,
} from "react-navigation-stack";
import MealList from "../components/MealList";
import { RootState } from "../App";
import { StyleSheet, View } from "react-native";
import DefaultText from "../components/DefaultText";

type Params = {};

type ScreenProps = {};

const CategoriesMealScreen: NavigationScreenComponent<Params, ScreenProps> = (
	props
) => {
	const catId = props.navigation.getParam("categoryId");

	const availableMeals = useSelector(
		(state: RootState) => state.meals.filteredMeals
	);

	const displayedMeals = availableMeals.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);

	if (displayedMeals.length === 0) {
		return (
			<View style={styles.content}>
				<DefaultText>No meals found, check your filters!</DefaultText>
			</View>
		);
	}
	return (
		<MealList
			listData={displayedMeals}
			navigation={props.navigation}
		></MealList>
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

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default CategoriesMealScreen;
