import axios from "axios";

const proxyServer = "";
const mealCategoriesUrl = () =>
  `${proxyServer}https://www.themealdb.com/api/json/v1/1/categories.php`;
const mealListByLetterUrl = (selectedLetter) =>
  `${proxyServer}https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedLetter.toLocaleLowerCase()}`;
const mealListByCategoryUrl = (selectedCategory) =>
  `${proxyServer}https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
const mealListBySearchUrl = (searchName) =>
  `${proxyServer}https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`;
const mealByIdUrl = (id) =>
  `${proxyServer}https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
const mealByRandomUrl = () =>
  `${proxyServer}https://www.themealdb.com/api/json/v1/1/random.php`;

export const fetchMealCategories = async () => {
  try {
    const response = await axios.get(mealCategoriesUrl());
    return response.data.categories;
  } catch (err) {
    return console.log(err);
  }
};

export const fetchMealListByLetter = async (selectedLetter) => {
  try {
    const response = await axios.get(mealListByLetterUrl(selectedLetter));
    return response.data.meals;
  } catch (err) {
    return console.log(err);
  }
};

export const fetchMealListByCategory = async (selectedCategory) => {
  try {
    const response = await axios.get(mealListByCategoryUrl(selectedCategory));
    return response.data.meals;
  } catch (err) {
    return console.log(err);
  }
};

export const fetchMealListBySearch = async (searchName) => {
  try {
    const response = await axios.get(mealListBySearchUrl(searchName));
    return response.data.meals;
  } catch (err) {
    return console.log(err);
  }
};

export const fetchMealById = async (selectedId) => {
  try {
    const response = await axios.get(mealByIdUrl(selectedId));
    return response.data.meals;
  } catch (err) {
    return console.log(err);
  }
};

export const fetchMealByRandom = async () => {
  try {
    const response = await axios.get(mealByRandomUrl());
    return response.data.meals;
  } catch (err) {
    return console.log(err);
  }
};
