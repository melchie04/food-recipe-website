import React, { useEffect, useState } from "react";
import { Box, InputBase, Typography, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import HeroSlider, { Overlay, Slide } from "hero-slider";
import { useMealContext } from "../context/Context";
import { updateMealListBySearch } from "../utilities/Action";
import { styles } from "../styles/BannerStyles";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

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
        {images.map((image, index) => (
          <Slide key={index} background={{ backgroundImageSrc: image }} />
        ))}
      </HeroSlider>
    </>
  );
};

export default Banner;
