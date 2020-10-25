import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { Colors } from "../constants/Colors";
import { ROUTES } from "./routes";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
	},
	headerTintColor: "white",
};

// set screens
const MealNavigator = createStackNavigator(
	{
		[ROUTES.Categories]: {
			screen: CategoriesScreen,
			// navigationOptions: {
			// 	headerTitle: 'some title'
			// }
		},
		[ROUTES.CategoryMeals]: {
			screen: CategoriesMealScreen,
		},
		[ROUTES.MealDetail]: {
			screen: MealDetailScreen,
		},
	},
	{
		defaultNavigationOptions: defaultStackNavOptions,
	}
);

const FavNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: defaultStackNavOptions,
	}
);

const tabScreenConfig = {
	Meals: {
		screen: MealNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo: any) => {
				return (
					<Ionicons
						name="ios-restaurant"
						size={25}
						color={tabInfo.tintColor}
					></Ionicons>
				);
			},
		},
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			tabBarLabel: "Favorites!",
			tabBarIcon: (tabInfo: any) => {
				return (
					<Ionicons
						name="ios-star"
						size={25}
						color={tabInfo.tintColor}
					></Ionicons>
				);
			},
		},
	},
};

const MealsFavTabNavigator =
	Platform.OS === "android"
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				activeColor: Colors.accentColor,
				shifting: true,
		  })
		: createBottomTabNavigator(tabScreenConfig, {
				tabBarOptions: {
					activeTintColor: Colors.accentColor,
				},
		  });

const FiltersNavigator = createStackNavigator({
	Filters: FiltersScreen,
}, {
	defaultNavigationOptions: defaultStackNavOptions,
});

const MainNavigator = createDrawerNavigator({
	MealsFavs: {
	screen: MealsFavTabNavigator,
	navigationOptions: {
		drawerLabel: 'Meals'
	}
	},
	Filters: {
		screen: FiltersNavigator,
		navigationOptions: {
			drawerLabel: 'Filters'
		}
		,
}}, {
	contentOptions: {
		activeTintColor: Colors.accentColor,
		labelStyle: {
			fontFamily: 'open-sans-bold'
		}
	}
});

// always wrap root/most important navigator
export default createAppContainer(MainNavigator);
