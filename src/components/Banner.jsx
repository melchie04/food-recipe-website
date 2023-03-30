import React, { useEffect, useState } from "react";
import { Box, InputBase, Typography, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import HeroSlider, { Overlay, Slide } from "hero-slider";
import { useMealContext } from "../context/Context";
import { updateMealListBySearch } from "../utilities/Action";
import { styles } from "../styles/BannerStyles";
import { imageList } from "../utilities/Images";

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
    <>
      <HeroSlider
        height={"70vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Overlay>
          <Box sx={styles.banner}>
            <Typography variant="h1" sx={styles.header}>
              Welcome to <span style={styles.span}>EatWell</span>
            </Typography>
            <Typography variant="body1" sx={styles.paragraph}>
              What are your favorite cuisines? We'd love to help you create a
              meal.
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
        </Overlay>
        {imageList.map((image, index) => (
          <Slide
            key={index}
            background={{
              backgroundImageSrc: `${image}`,
            }}
          />
        ))}
      </HeroSlider>
    </>
  );
};

export default Banner;
