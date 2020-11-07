export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

interface ToggleFavoriteAction {
	type: typeof TOGGLE_FAVORITE;
	mealId: string;
}

export interface IFilterSettings {
	glutenFree: boolean;
	lactoseFree: boolean;
	vegan: boolean;
	isVegeterean: boolean;
}

interface ISetFilters {
	type: typeof SET_FILTERS;
	filters: IFilterSettings;
}

export type MealsActionTypes = ToggleFavoriteAction | ISetFilters;
