import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createAppContainer } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

type MealNavigator = {
	Categories: string;
	CategoryMeals: string;
	MealDetail: string;
};

// set screens
const MealNavigator = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeals: CategoriesMealScreen,
	MealDetail: MealDetailScreen,
});

export type MealNavigatorProps = StackNavigationProp<
	MealNavigator,
	"MealNavigator"
>;

// always wrap root/most important navigator
export default createAppContainer(MealNavigator);
