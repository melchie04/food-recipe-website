import { ACTIONS } from "../utilities/Constants";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SELECT_LETTER:
      if (state.selectedLetter === payload.selectedLetter) {
        return state;
      }
      return {
        ...state,
        mealList: payload.mealList,
        selectedLetter: payload.selectedLetter,
        selectedCategory: payload.selectedCategory,
        searchName: payload.searchName,
      };
    case ACTIONS.SELECT_CATEGORY:
      if (state.selectedCategory === payload.selectedCategory) {
        return state;
      }
      return {
        ...state,
        mealList: payload.mealList,
        selectedLetter: payload.selectedLetter,
        selectedCategory: payload.selectedCategory,
        searchName: payload.searchName,
      };
    case ACTIONS.SEARCH_NAME:
      if (state.searchName === payload.searchName) {
        return state;
      }
      return {
        ...state,
        mealList: payload.mealList,
        selectedLetter: payload.selectedLetter,
        selectedCategory: payload.selectedCategory,
        searchName: payload.searchName,
      };
    case ACTIONS.CHOOSE_MEAL:
      if (state.selectedId === payload.selectedId) {
        return state;
      }
      return {
        ...state,
        meal: payload.meal,
        selectedId: payload.selectedId,
      };
    case ACTIONS.CHOOSE_RANDOM:
      if (state.selectedId === payload.selectedId) {
        return state;
      }
      return {
        ...state,
        meal: payload.meal,
        selectedId: payload.selectedId,
      };
    default:
      return state;
  }
};
