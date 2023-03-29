import { ACTIONS } from "./Constants";
import {
  fetchMealListByLetter,
  fetchMealListByCategory,
  fetchMealListBySearch,
  fetchMealById,
  fetchMealByRandom,
} from "./Api";

export const updateMealListByLetter = (
  dispatch,
  selectedLetter,
  setMealListLoading
) => {
  setMealListLoading(true);
  fetchMealListByLetter(selectedLetter)
    .then((mealList) => {
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
    })
    .catch((error) => {
      console.log(error);
      setMealListLoading(false);
    });
};

export const updateMealListByCategory = (
  dispatch,
  selectedCategory,
  setMealListLoading
) => {
  setMealListLoading(true);
  fetchMealListByCategory(selectedCategory)
    .then((mealList) => {
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
    })
    .catch((error) => {
      console.log(error);
      setMealListLoading(false);
    });
};

export const updateMealListBySearch = (
  dispatch,
  searchName,
  setMealListLoading
) => {
  setMealListLoading(true);
  fetchMealListBySearch(searchName)
    .then((mealList) => {
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
    })
    .catch((error) => {
      console.log(error);
      setMealListLoading(false);
    });
};

export const updateMealById = (dispatch, selectedId, setMealLoading) => {
  setMealLoading(true);
  fetchMealById(selectedId)
    .then((meal) => {
      dispatch({
        type: ACTIONS.CHOOSE_MEAL,
        payload: {
          meal,
          selectedId,
        },
      });
      setMealLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setMealLoading(false);
    });
};

export const updateMealByRandom = (dispatch, selectedId, setMealLoading) => {
  setMealLoading(true);
  fetchMealByRandom()
    .then((meal) => {
      dispatch({
        type: ACTIONS.CHOOSE_RANDOM,
        payload: {
          meal,
          selectedId,
        },
      });
      setMealLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setMealLoading(false);
    });
};
