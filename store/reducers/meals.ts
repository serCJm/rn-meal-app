import { MEALS } from "../../data/data";

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

export const mealsReducer = (state = initialState) => {
	return state;
};
