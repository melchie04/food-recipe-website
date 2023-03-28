import axios from "axios";
import {
  mealCategoriesUrl,
  mealListByLetterUrl,
  mealListByCategoryUrl,
  mealListBySearchUrl,
  mealByIdUrl,
  mealByRandomUrl,
} from "./Api";

export const fetchMealCategories = async (setMealCategories) => {
  await axios
    .get(mealCategoriesUrl())
    .then((res) => {
      setMealCategories(res.data.categories);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchMealListByLetter = async (
  setMealList,
  setMealListLoading,
  selectedLetter
) => {
  setMealListLoading(true);
  await axios
    .get(mealListByLetterUrl(selectedLetter))
    .then((res) => {
      setMealList(res.data.meals);
    })
    .catch((err) => {
      console.log(err);
    });
  setMealListLoading(false);
};

export const fetchMealListByCategory = async (
  setMealList,
  setMealListLoading,
  selectedCategory
) => {
  setMealListLoading(true);
  await axios
    .get(mealListByCategoryUrl(selectedCategory))
    .then((res) => {
      setMealList(res.data.meals);
    })
    .catch((err) => {
      console.log(err);
    });
  setMealListLoading(false);
};

export const fetchMealListBySearch = async (
  setMealList,
  setMealListLoading,
  searchName
) => {
  setMealListLoading(true);
  await axios
    .get(mealListBySearchUrl(searchName))
    .then((res) => {
      setMealList(res.data.meals);
    })
    .catch((err) => {
      console.log(err);
    });
  setMealListLoading(false);
};

export const fetchMealById = async (setMeal, setMealLoading, selectedId) => {
  setMealLoading(true);
  await axios
    .get(mealByIdUrl(selectedId))
    .then((res) => {
      setMeal(res.data.meals);
      console.log(res.data.meals);
    })
    .catch((err) => {
      console.log(err);
    });
  setMealLoading(false);
};

export const fetchMealByRandom = async (setMeal, setMealLoading) => {
  setMealLoading(true);
  await axios
    .get(mealByRandomUrl())
    .then((res) => {
      setMeal(res.data.meals);
      console.log(res.data.meals);
    })
    .catch((err) => {
      console.log(err);
    });
  setMealLoading(false);
};
