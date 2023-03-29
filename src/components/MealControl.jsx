import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useMealContext } from "../context/Context";
import { updateMealByRandom } from "../utilities/Action";
import { generateRandom } from "../utilities/Helpers";
import { styles } from "../styles/MealControlStyles";

const MealControl = () => {
  const { setMealLoading, dispatch } = useMealContext();

  const handleClick = () => {
    updateMealByRandom(dispatch, generateRandom(10), setMealLoading);
  };

  return (
    <Box sx={styles.container}>
      <Link to="/" style={styles.link}>
        <Button variant="outlined" sx={styles.button}>
          Back
        </Button>
      </Link>
      <Button
        variant="outlined"
        sx={styles.button}
        onClick={() => handleClick()}
      >
        Random
      </Button>
    </Box>
  );
};

export default MealControl;
