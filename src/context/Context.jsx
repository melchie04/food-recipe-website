import React, { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./Reducer";
import { fetchMealCategories, fetchMealListByLetter } from "../utilities/Api";

const MealContext = createContext();

const initialState = {
  mealCategories: await fetchMealCategories(),
  mealList: await fetchMealListByLetter("A"),
  selectedLetter: "A",
  selectedCategory: "",
  searchName: "",
  meal: [],
  selectedId: "",
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [mealListLoading, setMealListLoading] = useState(false);
  const [mealLoading, setMealLoading] = useState(false);

  return (
    <MealContext.Provider
      value={{
        state,
        dispatch,
        mealListLoading,
        setMealListLoading,
        mealLoading,
        setMealLoading,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default Context;

export const useMealContext = () => {
  return useContext(MealContext);
};
