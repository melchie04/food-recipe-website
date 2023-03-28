import React from "react";
import { Box } from "@mui/material";
import eatwell from "../assets/loader.gif";

const styles = {
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "70vh",
  },
  image: {
    objectFit: "contain",
    height: "50%",
    width: "50%",
  },
};

const MealLoader = () => {
  return (
    <Box sx={styles.imageContainer}>
      <img src={eatwell} alt="eatwell" style={styles.image} />
    </Box>
  );
};

export default MealLoader;
