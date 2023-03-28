import React from "react";
import { Box, InputBase, Typography, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import imageBanner from "../assets/image-banner.jpg";
import { useMealContext } from "../utilities/Context";
import { ACTIONS } from "../utilities/Actions";

const styles = {
  banner: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageBanner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#dfc38b",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 16px",
    textAlign: "center",
    color: "#ffffff",
  },
  searchBox: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    padding: "5px 20px",
    maxWidth: "700px",
    width: "100%",
  },
  searchInput: {
    fontSize: "1.2rem",
    marginLeft: 8,
    flex: 1,
  },
  searchButton: {
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
  header: {
    fontWeight: "bold",
    fontSize: 48,
    marginBottom: 3,
  },
  span: {
    color: "#ef6d24",
  },
  paragraph: {
    fontSize: 24,
    marginBottom: 3,
  },
};

const Banner = () => {
  const { setSearchName, searchValue, setSearchValue, setActions } =
    useMealContext();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchName(searchValue);
      setActions(ACTIONS.SEARCH_NAME);
    }
  };

  const handleSearchClick = () => {
    setSearchName(searchValue);
    setActions(ACTIONS.SEARCH_NAME);
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
