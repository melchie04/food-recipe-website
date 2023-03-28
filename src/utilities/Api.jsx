export const mealListByLetterUrl = (selectedLetter) =>
  `https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedLetter.toLocaleLowerCase()}`;
export const mealCategoriesUrl = () =>
  `https://www.themealdb.com/api/json/v1/1/categories.php`;
export const mealListByCategoryUrl = (selectedCategory) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
export const mealListBySearchUrl = (searchName) =>
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`;
export const mealByIdUrl = (id) =>
  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
export const mealByRandomUrl = () =>
  `https://www.themealdb.com/api/json/v1/1/random.php`;
