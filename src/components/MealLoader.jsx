import React from "react";
import { Box } from "@mui/material";
import eatwell from "../assets/loader.gif";
import { styles } from "../styles/MealLoaderStyles";

const MealLoader = () => {
  return (
    <Box sx={styles.imageContainer}>
      <img src={eatwell} alt="eatwell" style={styles.image} />
    </Box>
  );
};

export default MealLoader;
