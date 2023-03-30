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
import { useMealContext } from "../context/Context";
import {
  updateMealByRandom,
  updateMealListByCategory,
  updateMealListByLetter,
} from "../utilities/Action";
import { generateRandom } from "../utilities/Helpers";
import { styles } from "../styles/SelectionStyles";

const Selection = () => {
  const {
    state: { mealCategories, selectedCategory },
    dispatch,
    setMealListLoading,
    setMealLoading,
  } = useMealContext();

  const handleSelectChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "") {
      updateMealListByLetter(dispatch, "A", setMealListLoading);
    } else {
      updateMealListByCategory(dispatch, selectedCategory, setMealListLoading);
    }
  };

  const handleClick = () => {
    updateMealByRandom(dispatch, generateRandom(10), setMealLoading);
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
        <Link to="/random" style={styles.link}>
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

export default Selection;
