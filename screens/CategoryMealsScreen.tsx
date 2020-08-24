import React from "react";
import { CATEGORIES, MEALS } from "../data/data";
import Category from "../models/category";
import { NavigationScreenComponent } from "react-navigation";
import {
	NavigationStackScreenProps,
	NavigationStackOptions,
} from "react-navigation-stack";
import MealList from "../components/MealList";

type Params = {};

type ScreenProps = {};

const CategoriesMealScreen: NavigationScreenComponent<Params, ScreenProps> = (
	props
) => {
	const catId = props.navigation.getParam("categoryId");

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);
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

export default CategoriesMealScreen;
