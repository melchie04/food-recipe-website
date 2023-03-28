import React from "react";
import { LinearProgress } from "@mui/material";
import { useMealContext } from "../utilities/Context";
import Banner from "../components/Banner";
import Controls from "../components/Controls";
import MealList from "../components/MealList";
import Paging from "../components/Paging";

const styles = {
  linearProgress: {
    backgroundColor: "rgba(239, 109, 36, 0.3)",
    "& .MuiLinearProgress-bar": {
      backgroundColor: "#ef6d24",
    },
  },
};

const Home = () => {
  const { mealListLoading } = useMealContext();

  return (
    <>
      <Banner />
      <Controls />
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
