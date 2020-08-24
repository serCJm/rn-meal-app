import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/data";

interface Props {}

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
