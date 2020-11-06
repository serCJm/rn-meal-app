export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

interface ToggleFavoriteAction {
	type: typeof TOGGLE_FAVORITE;
	mealId: string;
}

export type MealsActionTypes = ToggleFavoriteAction;
