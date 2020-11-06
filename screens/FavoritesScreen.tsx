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
import { StyleSheet, View } from "react-native";
import DefaultText from "../components/DefaultText";

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

	if (favMeals.length === 0) {
		return (
			<View style={styles.content}>
				<DefaultText>You got no favorite meals!</DefaultText>
			</View>
		);
	}

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

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default FavoritesScreen;
