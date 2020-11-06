import React from "react";
import {
	NavigationStackProp,
	NavigationStackOptions,
	NavigationStackScreenProps,
} from "react-navigation-stack";
import MealList from "../components/MealList";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { NavigationScreenComponent } from "react-navigation";
import { RootState } from "../App";
import { useSelector } from "react-redux";

interface Props {
	navigation: NavigationStackProp;
}
type Params = {};
type ScreenProps = {};

const FavoritesScreen: NavigationScreenComponent<Params, ScreenProps> = (
	props: Props
) => {
	const favMeals = useSelector(
		(state: RootState) => state.meals.favoriteMeals
	);

	return (
		<MealList listData={favMeals} navigation={props.navigation}></MealList>
	);
};

type navOptions = NavigationStackScreenProps & NavigationDrawerScreenProps;

FavoritesScreen.navigationOptions = (
	navData: navOptions
): NavigationStackOptions => {
	return {
		headerTitle: "Your Favorites",
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

export default FavoritesScreen;
