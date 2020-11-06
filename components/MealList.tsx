import React from "react";
import { StyleSheet, FlatList, View, ListRenderItemInfo } from "react-native";
import MealItem from "./MealItem";
import Meal from "../models/meal";
import { NavigationStackProp } from "react-navigation-stack";
import { ROUTES } from "../navigation/routes";

interface Props {
	listData: Meal[];
	navigation: NavigationStackProp;
}

const MealList = ({ listData, navigation }: Props) => {
	const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
		return (
			<MealItem
				title={itemData.item.title}
				onSelectMeal={() => {
					navigation.navigate({
						routeName: ROUTES.MealDetail,
						params: {
							mealId: itemData.item.id,
							mealTitle: itemData.item.title,
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
