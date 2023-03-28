import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useMealContext } from "../utilities/Context";

const styles = {
  container: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem 5rem",
    padding: "2rem 3rem",
    color: "#351808",
    boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.3)",
    "@media (max-width: 600px)": {
      margin: "2rem 3rem",
    },
    "@media (max-width: 420px)": {
      margin: "2rem 1rem",
      padding: "2rem 1rem",
    },
  },
  title: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#9f4818",
  },
  grid: {
    borderTop: "2px solid #ef6d24",
    borderBottom: "2px solid #ef6d24",
    paddingTop: "10px !important",
    paddingBottom: "10px !important",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50vh",
  },
  image: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    marginTop: "1rem",
    textAlign: "center",
  },
  ingredients: {
    margin: "1rem",
    textAlign: "center",
    listStyleType: "none",
  },
  instructions: {
    padding: "2rem",
    textAlign: "center",
  },
  videoContainer: {
    margin: "1rem",
    height: "400px",
    width: "600px",
    minWidth: "240px",
    "@media (max-width: 800px)": {
      height: "300px",
      width: "450px",
    },
    "@media (max-width: 620px)": {
      height: "250px",
      width: "350px",
    },
    "@media (max-width: 450px)": {
      height: "200px",
      width: "300px",
    },
    "@media (max-width: 350px)": {
      height: "200px",
      width: "240px",
    },
  },
};

const Meal = () => {
  const { meal } = useMealContext();
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
