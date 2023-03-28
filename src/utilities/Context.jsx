import React, { createContext, useEffect, useState, useContext } from "react";
import { ACTIONS } from "./Actions";
import {
  fetchMealCategories,
  fetchMealListByCategory,
  fetchMealListByLetter,
  fetchMealListBySearch,
  fetchMealById,
  fetchMealByRandom,
} from "./Axios";

const MealContext = createContext();

const Context = ({ children }) => {
  const [actions, setActions] = useState(ACTIONS.SELECT_LETTER);
  const [mealList, setMealList] = useState([]);
  const [mealListLoading, setMealListLoading] = useState(false);
  const [mealCategories, setMealCategories] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [meal, setMeal] = useState([]);
  const [mealLoading, setMealLoading] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    fetchMealCategories(setMealCategories);
    switch (actions) {
      case ACTIONS.SELECT_LETTER:
        fetchMealListByLetter(setMealList, setMealListLoading, selectedLetter);
        setSelectedCategory("");
        setSearchValue("");
        setSearchName("");
        break;
      case ACTIONS.SELECT_CATEGORY:
        fetchMealListByCategory(
          setMealList,
          setMealListLoading,
          selectedCategory
        );
        setSelectedLetter("");
        setSearchValue("");
        setSearchName("");
        break;
      case ACTIONS.SEARCH_NAME:
        fetchMealListBySearch(setMealList, setMealListLoading, searchName);
        setSelectedLetter("");
        setSelectedCategory("");
        break;
      case ACTIONS.CHOOSE_MEAL:
        fetchMealById(setMeal, setMealLoading, selectedId);
        break;
      case ACTIONS.CHOOSE_RANDOM:
        fetchMealByRandom(setMeal, setMealLoading);
        break;
      default:
        break;
    }
  }, [selectedLetter, selectedCategory, searchName, selectedId]);

  return (
    <MealContext.Provider
      value={{
        setActions,
        mealList,
        mealListLoading,
        mealCategories,
        selectedLetter,
        setSelectedLetter,
        selectedCategory,
        setSelectedCategory,
        setSearchName,
        searchName,
        searchValue,
        setSearchValue,
        meal,
        mealLoading,
        setSelectedId,
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
