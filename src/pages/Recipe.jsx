import React from "react";
import MealControl from "../components/MealControl";
import Meal from "../components/Meal";
import MealLoader from "../components/MealLoader";
import { useMealContext } from "../utilities/Context";
import NotFound from "./NotFound";

const Recipe = () => {
  const { meal, mealLoading } = useMealContext();

  return (
    <>
      <MealControl />
      {mealLoading ? (
        <MealLoader />
      ) : (
        <>{!meal || meal.length === 0 ? <NotFound /> : <Meal />}</>
      )}
    </>
  );
};

export default Recipe;
