import { MealsActionTypes, TOGGLE_FAVORITE } from "./types";

export const toggleFavorite = (id: string): MealsActionTypes => {
	return { type: TOGGLE_FAVORITE, mealId: id };
};
