import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  ImageList,
  ImageListItem,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useMealContext } from "../context/Context";
import { updateMealById } from "../utilities/Action";
import { styles } from "../styles/MealListStyles";

const MealList = () => {
  const {
    state: { mealList },
    dispatch,
    setMealLoading,
  } = useMealContext();

  const handleClick = (id) => {
    updateMealById(dispatch, id, setMealLoading);
  };

  return (
    <>
      <Box sx={styles.container}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={styles.typography}
        >
          {mealList ? (
            <span>Here is a list of meals that you can try!</span>
          ) : (
            <span>We're sorry. No meals have been found at this time.</span>
          )}
        </Typography>
      </Box>
      <Box sx={styles.container}>
        <ImageList sx={styles.imageList}>
          {mealList?.map((meal) => (
            <ImageListItem key={meal.idMeal}>
              <Link
                to={`/${meal.idMeal}`}
                style={styles.link}
                onClick={() => handleClick(meal.idMeal)}
              >
                <Card sx={styles.card}>
                  <CardActionArea>
                    <CardMedia
                      sx={styles.media}
                      image={meal.strMealThumb}
                      title={meal.strMeal}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={styles.typography}
                      >
                        {meal.strMeal}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default MealList;
