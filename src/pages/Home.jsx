import React, { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { useMealContext } from "../context/Context";
import MealLoader from "../components/MealLoader";
import Banner from "../components/Banner";
import Selection from "../components/Selection";
import MealList from "../components/MealList";
import Paging from "../components/Paging";
import { styles } from "../styles/HomeStyles";

const Home = () => {
  const { mealListLoading } = useMealContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <MealLoader />
      ) : (
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
      )}
    </>
  );
};

export default Home;
