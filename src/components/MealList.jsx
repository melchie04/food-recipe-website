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
import { useMealContext } from "../utilities/Context";
import { ACTIONS } from "../utilities/Actions";

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
  imageList: {
    width: "100%",
    height: "auto",
    overflow: "hidden",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "1rem",
    "& li": {
      flexBasis: "24%",
      marginBottom: "10px",
    },
    "@media (max-width: 992px)": {
      "& li": {
        flexBasis: "32%",
      },
    },
    "@media (max-width: 768px)": {
      "& li": {
        flexBasis: "49%",
      },
    },
    "@media (max-width: 600px)": {
      "& li": {
        flexBasis: "99%",
      },
    },
  },
  card: {
    maxWidth: "100%",
    height: "100%",
    margin: "auto 10px",
    borderRadius: "12px",
    boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.4)",
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0px 4px 6px 0px rgba(0,0,0,0.6)",
      transform: "scale(1.05)",
    },
  },
  media: {
    height: "200px",
  },
  typography: {
    textAlign: "center",
    color: "#351808",
  },
  link: {
    color: "#000000",
    textDecoration: "none",
    maxWidth: "100%",
    height: "100%",
  },
  category: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem 5rem",
    border: "2px solid #351808",
    "@media (max-width: 600px)": {
      margin: "2rem 3rem",
    },
    "@media (max-width: 420px)": {
      margin: "2rem 1rem",
    },
  },
  paragraph: {
    color: "#351808",
    fontWeight: "20px",
    padding: "1rem 2rem",
  },
};

const MealList = () => {
  const { mealList, setSelectedId, setActions } = useMealContext();
  const handleClick = (id) => {
    setSelectedId(id);
    setActions(ACTIONS.CHOOSE_MEAL);
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
                to={`/recipe/${meal.idMeal}`}
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
