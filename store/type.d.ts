import Meal from "../models/meal";

export type MealState = {
	meals: Meal[];
	filteredMeals: Meal[];
	favoriteMeals: Meal[];
};
