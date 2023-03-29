import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { fetchMealCategories, fetchMealListByLetter } from "../utilities/Api";
import { reducer } from "./Reducer";

const MealContext = createContext();

const initialState = {
  mealCategories: [],
  mealList: [],
  selectedLetter: "A",
  selectedCategory: "",
  searchName: "",
  meal: [],
  selectedId: "",
};

const Context = ({ children }) => {
  const [mealListLoading, setMealListLoading] = useState(false);
  const [mealLoading, setMealLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setMealListLoading(true);
      initialState.mealCategories = await fetchMealCategories();
      initialState.mealList = await fetchMealListByLetter("A");
      setMealListLoading(false);
    };
    fetchData();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

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
