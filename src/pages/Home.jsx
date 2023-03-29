import React from "react";
import { LinearProgress } from "@mui/material";
import { useMealContext } from "../context/Context";
import Banner from "../components/Banner";
import Selection from "../components/Selection";
import MealList from "../components/MealList";
import Paging from "../components/Paging";
import { styles } from "../styles/HomeStyles";

const Home = () => {
  const { mealListLoading } = useMealContext();

  return (
    <>
      <Banner />
      <Selection />
      {mealListLoading ? (
        <LinearProgress sx={styles.linearProgress} />
      ) : (
        <MealList />
      )}
      <Paging />
    </>
  );
};

export default Home;
