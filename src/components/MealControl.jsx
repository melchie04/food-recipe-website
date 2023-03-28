import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useMealContext } from "../utilities/Context";
import { ACTIONS } from "../utilities/Actions";
import { generateRandomText } from "../utilities/Random";

const styles = {
  container: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    margin: "2rem 5rem",
    "@media (max-width: 600px)": {
      margin: "2rem 3rem",
    },
    "@media (max-width: 420px)": {
      margin: "2rem 1rem",
    },
  },
  button: {
    height: "40px",
    color: "#ef6d24",
    fontWeight: "bold",
    borderColor: "#ef6d24",
    borderWidth: "2px",
    margin: "auto 5px",
    "&:hover": {
      backgroundColor: "#ef6d24",
      borderColor: "#ef6d24",
      borderWidth: "2px",
      color: "#ffffff",
    },
  },
  link: {
    color: "#000000",
    textDecoration: "none",
    maxWidth: "100%",
    height: "100%",
  },
};

const MealControl = () => {
  const { setSelectedId, setActions } = useMealContext();

  const handleClick = () => {
    setSelectedId(generateRandomText(10));
    setActions(ACTIONS.CHOOSE_RANDOM);
  };

  return (
    <Box sx={styles.container}>
      <Link to="/" style={styles.link}>
        <Button variant="outlined" sx={styles.button}>
          Back to Home
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
