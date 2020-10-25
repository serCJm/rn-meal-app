import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/data";
import Category from "../models/category";
import {
	NavigationStackProp,
	NavigationStackOptions,
	NavigationStackScreenProps,
} from "react-navigation-stack";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { NavigationScreenComponent } from "react-navigation";

type Props = {
	navigation: NavigationStackProp;
};
type Params = {
};
type ScreenProps = {
};

const CategoriesScreen: NavigationScreenComponent<Params, ScreenProps> = (props: Props) => {
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

type navOptions = NavigationStackScreenProps & NavigationDrawerScreenProps;

CategoriesScreen.navigationOptions = (
	navData: navOptions
): NavigationStackOptions => {
	return {
		headerTitle: "Meal Categories",
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => navData.navigation.toggleDrawer()}
				></Item>
			</HeaderButtons>
		),
	};
};

export default CategoriesScreen;
