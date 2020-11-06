import React from "react";
import { StyleSheet, FlatList, View, ListRenderItemInfo } from "react-native";
import MealItem from "./MealItem";
import Meal from "../models/meal";
import { NavigationStackProp } from "react-navigation-stack";
import { ROUTES } from "../navigation/routes";
import { useSelector } from "react-redux";
import { RootState } from "../App";

interface Props {
	listData: Meal[];
	navigation: NavigationStackProp;
}

const MealList = ({ listData, navigation }: Props) => {
	const favMeals = useSelector(
		(state: RootState) => state.meals.favoriteMeals
	);
	const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
		const isFav = favMeals.some((meal) => meal.id === itemData.item.id);
		return (
			<MealItem
				title={itemData.item.title}
				onSelectMeal={() => {
					navigation.navigate({
						routeName: ROUTES.MealDetail,
						params: {
							mealId: itemData.item.id,
							mealTitle: itemData.item.title,
							isFav,
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
	return (
		<View style={styles.list}>
			<FlatList
				data={listData}
				renderItem={renderMealItem}
				style={{ width: "90%" }}
			></FlatList>
		</View>
	);
};

export default MealList;

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
	},
});
