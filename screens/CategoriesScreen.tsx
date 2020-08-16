import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	ListRenderItemInfo,
	Platform,
} from "react-native";
import { MealNavigatorProps } from "../navigation/MealsNavigator";
import { CATEGORIES } from "../data/data";
import Category from "../models/category";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../constants/Colors";

type Props = {
	navigation: MealNavigatorProps;
};

const CategoriesScreen = (props: Props) => {
	const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
		return (
			<TouchableOpacity
				style={styles.gridItem}
				onPress={() =>
					props.navigation.navigate({
						routeName: "CategoryMeals",
						params: {
							categoryId: itemData.item.id,
						},
					})
				}
			>
				<View>
					<Text>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
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
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
	},
	headerTintColor: "white",
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
