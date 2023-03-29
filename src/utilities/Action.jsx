import { ACTIONS } from "./Constants";
import {
  fetchMealListByLetter,
  fetchMealListByCategory,
  fetchMealListBySearch,
  fetchMealById,
  fetchMealByRandom,
} from "./Api";

export const updateMealListByLetter = async (
  dispatch,
  selectedLetter,
  setMealListLoading
) => {
  setMealListLoading(true);
  const mealList = await fetchMealListByLetter(selectedLetter);
  dispatch({
    type: ACTIONS.SELECT_LETTER,
    payload: {
      mealList,
      selectedLetter,
      selectedCategory: "",
      searchName: "",
    },
  });
  setMealListLoading(false);
};

export const updateMealListByCategory = async (
  dispatch,
  selectedCategory,
  setMealListLoading
) => {
  setMealListLoading(true);
  const mealList = await fetchMealListByCategory(selectedCategory);
  dispatch({
    type: ACTIONS.SELECT_CATEGORY,
    payload: {
      mealList,
      selectedLetter: "",
      selectedCategory,
      searchName: "",
    },
  });
  setMealListLoading(false);
};

export const updateMealListBySearch = async (
  dispatch,
  searchName,
  setMealListLoading
) => {
  setMealListLoading(true);
  const mealList = await fetchMealListBySearch(searchName);
  dispatch({
    type: ACTIONS.SEARCH_NAME,
    payload: {
      mealList,
      selectedLetter: "",
      selectedCategory: "",
      searchName,
    },
  });
  setMealListLoading(false);
};

export const updateMealById = async (dispatch, selectedId, setMealLoading) => {
  setMealLoading(true);
  const meal = await fetchMealById(selectedId);
  dispatch({
    type: ACTIONS.CHOOSE_MEAL,
    payload: {
      meal,
      selectedId,
    },
  });
  setMealLoading(false);
};

export const updateMealByRandom = async (
  dispatch,
  selectedId,
  setMealLoading
) => {
  setMealLoading(true);
  const meal = await fetchMealByRandom();
  dispatch({
    type: ACTIONS.CHOOSE_RANDOM,
    payload: {
      meal,
      selectedId,
    },
  });
  setMealLoading(false);
};
