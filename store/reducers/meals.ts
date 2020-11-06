import { MEALS } from "../../data/data";
import { MealState } from "../type";

const initialState: MealState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

export const mealsReducer = (state = initialState): MealState => {
	return state;
};
