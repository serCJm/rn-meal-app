import { MEALS } from "../../data/data";
import {
	MealsActionTypes,
	SET_FILTERS,
	TOGGLE_FAVORITE,
} from "../actions/types";
import { MealState } from "../type";

const initialState: MealState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

export const mealsReducer = (
	state = initialState,
	action: MealsActionTypes
): MealState => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const existingIndex = state.favoriteMeals.findIndex(
				(meal) => meal.id === action.mealId
			);
			if (existingIndex >= 0) {
				const updatedFavMeals = [...state.favoriteMeals];
				updatedFavMeals.splice(existingIndex, 1);
				return { ...state, favoriteMeals: updatedFavMeals };
			} else {
				const meal = state.meals.find(
					(meal) => meal.id === action.mealId
				);
				if (meal)
					return {
						...state,
						favoriteMeals: state.favoriteMeals.concat(meal),
					};
			}
			return state;
		case SET_FILTERS:
			const appliedFilters = action.filters;
			const filteredMeals = state.meals.filter((meal) => {
				if (appliedFilters.glutenFree && !meal.isGlutenFree) {
					return false;
				}
				if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
					return false;
				}
				if (appliedFilters.vegetarian && !meal.isVegetarian) {
					return false;
				}
				if (appliedFilters.vegan && !meal.isVegan) {
					return false;
				}
			});
			return { ...state, filteredMeals };
		default:
			return state;
	}
};
