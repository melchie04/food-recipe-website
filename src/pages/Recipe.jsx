import React from "react";
import { useMealContext } from "../context/Context";
import MealControl from "../components/MealControl";
import Meal from "../components/Meal";
import MealLoader from "../components/MealLoader";
import NotFound from "./NotFound";

const Recipe = () => {
  const {
    state: { meal },
    mealLoading,
  } = useMealContext();

  return (
    <>
      {mealLoading ? (
        <MealLoader />
      ) : (
        <>
          {!meal || meal.length === 0 ? (
            <NotFound />
          ) : (
            <>
              <MealControl />
              <Meal />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Recipe;
