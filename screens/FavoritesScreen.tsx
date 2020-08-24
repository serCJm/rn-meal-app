import React from "react";
import { MEALS } from "../data/data";
import { NavigationStackProp } from "react-navigation-stack";
import MealList from "../components/MealList";

interface Props {
	navigation: NavigationStackProp;
}

const FavoritesScreen = (props: Props) => {
	const favMeals = MEALS.filter(
		(meal) => meal.id === "m1" || meal.id === "m2"
	);
	return (
		<MealList listData={favMeals} navigation={props.navigation}></MealList>
	);
};

FavoritesScreen.navigatorOptions = {
	headerTitle: "Your Favorites!",
};

export default FavoritesScreen;
