import React from "react";
import { StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/data";
import Category from "../models/category";
import { NavigationStackProp } from "react-navigation-stack";
import CategoryGridTile from "../components/CategoryGridTile";

type Props = {
	navigation: NavigationStackProp;
};

const CategoriesScreen = (props: Props) => {
	const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() =>
					props.navigation.navigate("CategoryMeals", {
						categoryId: itemData.item.id,
					})
				}
			></CategoryGridTile>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		></FlatList>
	);
};

CategoriesScreen.navigationOptions = {
	headerTitle: "Meal Categories",
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
