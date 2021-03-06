import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import {
	NavigationStackOptions,
	NavigationStackProp,
	NavigationStackScreenProps,
} from "react-navigation-stack";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { NavigationScreenComponent } from "react-navigation";
import { Colors } from "../constants/Colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

interface Props {
	navigation: NavigationStackProp;
}
type Params = {};
type ScreenProps = {};
type filterSwitchProps = {
	label: string;
	state: boolean;
	onChange: (newValue: boolean) => void;
};

const FilterSwitch = (props: filterSwitchProps) => {
	return (
		<View style={styles.flexContainer}>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{
					false: "grey",
					true: Colors.primaryColor,
				}}
				thumbColor={Colors.accentColor}
				value={props.state}
				onValueChange={props.onChange}
			></Switch>
		</View>
	);
};

const FiltersScreen: NavigationScreenComponent<Params, ScreenProps> = ({
	navigation,
}: Props) => {
	const [isGlutenFree, setGlutenFree] = useState(false);
	const [isLactoseFree, setLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegeterean, setIsVegeterean] = useState(false);

	const dispatch = useDispatch();

	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			isVegeterean: isVegeterean,
		};
		dispatch(setFilters(appliedFilters));
	}, [isGlutenFree, isLactoseFree, isVegan, isVegeterean, dispatch]);

	useEffect(() => {
		navigation.setParams({ save: saveFilters });
	}, [saveFilters]);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters!</Text>
			<FilterSwitch
				label="Gluten-Free"
				state={isGlutenFree}
				onChange={(newValue) => setGlutenFree(newValue)}
			></FilterSwitch>
			<FilterSwitch
				label="Lactose-Free"
				state={isLactoseFree}
				onChange={(newValue) => setLactoseFree(newValue)}
			></FilterSwitch>
			<FilterSwitch
				label="Vegan"
				state={isVegan}
				onChange={(newValue) => setIsVegan(newValue)}
			></FilterSwitch>
			<FilterSwitch
				label="Vegetarean"
				state={isVegeterean}
				onChange={(newValue) => setIsVegeterean(newValue)}
			></FilterSwitch>
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
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Save"
					iconName="ios-save"
					onPress={navData.navigation.getParam("save")}
				></Item>
			</HeaderButtons>
		),
	};
};

export default FiltersScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		margin: 20,
		textAlign: "center",
	},
	flexContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		marginVertical: 20,
	},
});
