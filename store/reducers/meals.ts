import { MEALS } from "../../data/data";
import { MealsActionTypes, TOGGLE_FAVORITE } from "../actions/types";
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
		default:
			return state;
	}
};
