import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	ListRenderItemInfo,
} from "react-native";
import { MealNavigatorProps } from "../navigation/MealsNavigator";
import { CATEGORIES } from "../data/data";
import Category from "../models/category";

type Props = {
	navigation: MealNavigatorProps;
};

const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
	return (
		<View style={styles.gridItem}>
			<Text>{itemData.item.title}</Text>
		</View>
	);
};

const CategoriesScreen = (props: Props) => {
	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		></FlatList>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
});
