import React from "react";
import { StyleSheet, View, ListRenderItemInfo } from "react-native";
import { CATEGORIES, MEALS } from "../data/data";
import Category from "../models/category";
import { NavigationScreenComponent } from "react-navigation";
import {
	NavigationStackScreenProps,
	NavigationStackOptions,
} from "react-navigation-stack";
import { FlatList } from "react-native-gesture-handler";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";
import { ROUTES } from "../navigation/routes";

type Params = {};

type ScreenProps = {};

const CategoriesMealScreen: NavigationScreenComponent<Params, ScreenProps> = (
	props
) => {
	const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
		return (
			<MealItem
				title={itemData.item.title}
				onSelectMeal={() => {
					props.navigation.navigate({
						routeName: ROUTES.MealDetail,
						params: {
							mealId: itemData.item.id,
						},
					});
				}}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				imageUri={itemData.item.imageUrl}
			></MealItem>
		);
	};

	const catId = props.navigation.getParam("categoryId");

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);
	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeals}
				renderItem={renderMealItem}
				style={{ width: "90%" }}
			></FlatList>
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
		padding: 15,
	},
});
