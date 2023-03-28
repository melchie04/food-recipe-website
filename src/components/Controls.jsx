import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useMealContext } from "../utilities/Context";
import { ACTIONS } from "../utilities/Actions";
import { generateRandomText } from "../utilities/Random";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem 5rem",
    "@media (max-width: 600px)": {
      margin: "2rem 3rem",
    },
    "@media (max-width: 420px)": {
      margin: "2rem 1rem",
    },
  },
  formControl: {
    minWidth: "150px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#ef6d24",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#ef6d24 !important",
    },
  },
  select: {
    marginRight: "10px",
    height: "40px",
    fontWeight: "bold",
    color: "#ef6d24",
    borderWidth: "2px",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#ef6d24",
    },
  },
  label: {
    fontWeight: "bold",
    color: "#ef6d24",
    "&.Mui-focused": {
      color: "#ef6d24",
    },
  },
  menuItem: {
    fontWeight: "bold",
    color: "#ef6d24",
    "&:hover": {
      backgroundColor: "#ef6d24 !important",
      color: "#ffffff",
    },
  },
  button: {
    height: "40px",
    color: "#ef6d24",
    fontWeight: "bold",
    borderColor: "#ef6d24",
    borderWidth: "2px",
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

const Controls = () => {
  const {
    mealCategories,
    selectedCategory,
    setSelectedCategory,
    setSelectedId,
    setActions,
  } = useMealContext();

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
    setActions(ACTIONS.SELECT_CATEGORY);
  };

  const handleClick = () => {
    setSelectedId(generateRandomText(10));
    setActions(ACTIONS.CHOOSE_RANDOM);
  };

  return (
    <>
      <Box sx={styles.container}>
        <FormControl sx={styles.formControl} size="small">
          <InputLabel id="categories" sx={styles.label}>
            Categories
          </InputLabel>
          <Select
            labelId="categories"
            label="Categories"
            sx={styles.select}
            value={selectedCategory}
            onChange={handleSelectChange}
          >
            <MenuItem sx={styles.menuItem} value="">
              <em>None</em>
            </MenuItem>
            {mealCategories?.map((categories) => (
              <MenuItem
                sx={styles.menuItem}
                value={categories.strCategory}
                key={categories.idCategory}
              >
                {categories.strCategory}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Link to="/recipe/random" style={styles.link}>
          <Button
            variant="outlined"
            sx={styles.button}
            onClick={() => handleClick()}
          >
            Random
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Controls;
