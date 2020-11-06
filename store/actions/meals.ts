import {
	MealsActionTypes,
	SET_FILTERS,
	TOGGLE_FAVORITE,
	IFilterSettings,
} from "./types";

export const toggleFavorite = (id: string): MealsActionTypes => {
	return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilters = (
	filterSettings: IFilterSettings
): MealsActionTypes => {
	return { type: SET_FILTERS, filters: filterSettings };
};
