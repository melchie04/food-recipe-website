import React, { useEffect, useState } from "react";
import { Box, InputBase, Typography, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useMealContext } from "../context/Context";
import { updateMealListBySearch } from "../utilities/Action";
import { styles } from "../styles/BannerStyles";

const Banner = () => {
  const {
    state: { searchName },
    dispatch,
    setMealListLoading,
  } = useMealContext();
  const [searchValue, setSearchValue] = useState(searchName);

  useEffect(() => {
    setSearchValue(searchName);
  }, [searchName]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      updateMealListBySearch(dispatch, searchValue, setMealListLoading);
    }
  };

  const handleSearchClick = () => {
    updateMealListBySearch(dispatch, searchValue, setMealListLoading);
  };

  return (
    <Box sx={styles.banner}>
      <Typography variant="h1" sx={styles.header}>
        Welcome to <span style={styles.span}>EatWell</span>
      </Typography>
      <Typography variant="body1" sx={styles.paragraph}>
        What are your favorite cuisines? We'd love to help you create a meal.
      </Typography>
      <Box style={styles.searchBox}>
        <InputBase
          placeholder="Search for a meal..."
          style={styles.searchInput}
          value={searchValue}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <IconButton
          type="button"
          aria-label="search"
          sx={styles.searchButton}
          onClick={handleSearchClick}
        >
          <Search />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Banner;
