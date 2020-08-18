import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { Colors } from "../constants/Colors";

export enum ROUTES {
	Categories = "Categories",
	CategoryMeals = "CategoryMeals",
	MealDetail = "MealDetail",
}

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
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor:
					Platform.OS === "android" ? Colors.primaryColor : "",
			},
			headerTintColor: "white",
		},
	}
);

// always wrap root/most important navigator
export default createAppContainer(MealNavigator);
