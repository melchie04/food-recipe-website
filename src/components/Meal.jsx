import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useMealContext } from "../context/Context";
import { styles } from "../styles/MealStyles";

const Meal = () => {
  const {
    state: { meal },
  } = useMealContext();
  return (
    <>
      {meal?.map((data) => (
        <Box sx={styles.container} key={data.idMeal}>
          <Box sx={styles.title}>
            <Typography variant="h4">{data.strMeal}</Typography>
          </Box>
          <Grid container sx={styles.grid}>
            <Grid item xs={12} md={6}>
              <Box sx={styles.imageContainer}>
                <img
                  src={data.strMealThumb}
                  alt={data.strMeal}
                  style={styles.image}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={styles.box}>
                <Typography variant="h6" sx={styles.subtitle}>
                  INGREDIENTS
                </Typography>
                <ul style={styles.ingredients}>
                  {Object.keys(data)
                    .filter((key) => key.includes("Ingredient") && data[key])
                    .map((key) => (
                      <li key={key}>
                        {data[key]} -{" "}
                        {data[`strMeasure${key.slice("strIngredient".length)}`]}
                      </li>
                    ))}
                </ul>
              </Box>
            </Grid>
          </Grid>
          <Box sx={styles.box}>
            <Typography variant="h6" sx={styles.subtitle}>
              INSTRUCTIONS
            </Typography>
            <Box sx={styles.instructions}>
              <Typography variant="p">{data.strInstructions}</Typography>
            </Box>
          </Box>
          <Box sx={styles.box}>
            <Typography variant="h5" sx={styles.subtitle}>
              Watch our videos to learn more about recipes, ingredients and
              techniques.
            </Typography>
            <Box sx={styles.videoContainer}>
              <iframe
                width="100%"
                height="100%"
                title="recipeVideo"
                src={`https://www.youtube.com/embed/${data.strYoutube.slice(
                  "https://www.youtube.com/watch?v=".length
                )}`}
              ></iframe>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Meal;
