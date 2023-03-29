import axios from "axios";

const proxyServer = "https://cors-anywhere.herokuapp.com/";
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

export const fetchMealCategories = () => {
  return axios
    .get(mealCategoriesUrl())
    .then((response) => response.data.categories)
    .catch((err) => console.log(err));
};

export const fetchMealListByLetter = (selectedLetter) => {
  return axios
    .get(mealListByLetterUrl(selectedLetter))
    .then((response) => response.data.meals)
    .catch((err) => console.log(err));
};

export const fetchMealListByCategory = (selectedCategory) => {
  return axios
    .get(mealListByCategoryUrl(selectedCategory))
    .then((response) => response.data.meals)
    .catch((err) => console.log(err));
};

export const fetchMealListBySearch = (searchName) => {
  return axios
    .get(mealListBySearchUrl(searchName))
    .then((response) => response.data.meals)
    .catch((err) => console.log(err));
};

export const fetchMealById = (selectedId) => {
  return axios
    .get(mealByIdUrl(selectedId))
    .then((response) => response.data.meals)
    .catch((err) => console.log(err));
};

export const fetchMealByRandom = () => {
  return axios
    .get(mealByRandomUrl())
    .then((response) => response.data.meals)
    .catch((err) => console.log(err));
};
