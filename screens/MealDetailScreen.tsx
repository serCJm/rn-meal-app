import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import {
	NavigationStackScreenProps,
	NavigationStackOptions,
} from "react-navigation-stack";
import CustomHeaderButton from "../components/HeaderButton";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import { NavigationScreenComponent } from "react-navigation";
import DefaultText from "../components/DefaultText";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../App";
import { toggleFavorite } from "../store/actions/meals";

type Params = {};

type ScreenProps = {};

interface Props {
	children: React.ReactNode;
}

const ListItem = (props: Props) => {
	return (
		<View style={styles.listItem}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	);
};

const MealDetailScreen: NavigationScreenComponent<Params, ScreenProps> = (
	props
) => {
	const availableMeals = useSelector((state: RootState) => state.meals.meals);

	const mealId = props.navigation.getParam("mealId");

	const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

	const dispatch = useDispatch();

	const toggleFavoriteHandler = useCallback(() => {
		dispatch(toggleFavorite(mealId));
	}, [dispatch, mealId]);

	useEffect(() => {
		props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
	}, [toggleFavoriteHandler]);

	// useEffect(() => {
	// 	props.navigation.setParams({ mealTitle: selectedMeal?.title });
	// }, [selectedMeal]);

	return (
		<ScrollView>
			<Image
				source={{ uri: selectedMeal?.imageUrl }}
				style={styles.image}
			></Image>
			<View style={styles.details}>
				<DefaultText>{selectedMeal?.duration}m</DefaultText>
				<DefaultText>
					{selectedMeal?.complexity.toUpperCase()}
				</DefaultText>
				<DefaultText>
					{selectedMeal?.affordability.toUpperCase()}
				</DefaultText>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal?.ingredients.map((ingredient) => (
				<ListItem key={ingredient}>{ingredient}</ListItem>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal?.steps.map((step) => (
				<ListItem key={step}>{step}</ListItem>
			))}
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = (
	navigationData: NavigationStackScreenProps
): NavigationStackOptions => {
	// const mealId = navigationData.navigation.getParam("mealId");
	const toggleFavorite = navigationData.navigation.getParam("toggleFav");
	const mealTitle = navigationData.navigation.getParam("mealTitle");

	// const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return {
		headerTitle: mealTitle,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star"
					onPress={toggleFavorite}
				></Item>
			</HeaderButtons>
		),
	};
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 200,
	},
	details: {
		flexDirection: "row",
		padding: 15,
		justifyContent: "space-around",
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		textAlign: "center",
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 10,
	},
});
