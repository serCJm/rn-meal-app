import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
	NavigationStackScreenProps,
	NavigationStackOptions,
} from "react-navigation-stack";
import { MEALS } from "../data/data";
import CustomHeaderButton from "../components/HeaderButton";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import { NavigationScreenComponent } from "react-navigation";

type Params = {};

type ScreenProps = {};

const MealDetailScreen: NavigationScreenComponent<Params, ScreenProps> = (
	props
) => {
	const mealId = props.navigation.getParam("mealId");

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return (
		<View style={styles.screen}>
			<Text>{selectedMeal?.title}</Text>
			<Button
				title="Go Back To Categories!"
				onPress={() => props.navigation.popToTop()}
			></Button>
		</View>
	);
};

MealDetailScreen.navigationOptions = (
	navigationData: NavigationStackScreenProps
): NavigationStackOptions => {
	const mealId = navigationData.navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return {
		headerTitle: selectedMeal?.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star"
					onPress={() => {}}
				></Item>
			</HeaderButtons>
		),
	};
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
