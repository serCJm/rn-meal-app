import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
	NavigationStackOptions,
	NavigationStackScreenProps,
} from "react-navigation-stack";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { NavigationScreenComponent } from "react-navigation";

interface Props {}
type Params = {
};
type ScreenProps = {
};

const FiltersScreen: NavigationScreenComponent<Params, ScreenProps> = (props: Props) => {
	return (
		<View style={styles.screen}>
			<Text>The FiltersScreen Screen!</Text>
		</View>
	);
};

type navOptions = NavigationStackScreenProps & NavigationDrawerScreenProps;

FiltersScreen.navigationOptions = (
	navData: navOptions
): NavigationStackOptions => {
	return {
		headerTitle: "Filter Meals",
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

export default FiltersScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
