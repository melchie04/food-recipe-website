import React from "react";
import { Box, Button, Typography, Toolbar, AppBar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import eatwell from "../assets/eatwell.png";

const styles = {
  container: {
    flexGrow: 1,
  },
  typography: {
    fontWeight: "bold",
    flexGrow: 1,
    cursor: "pointer",
    paddingLeft: 1,
  },
  button: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#ef6d24",
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.container}>
        <AppBar position="static">
          <Toolbar>
            <img src={eatwell} alt="eatwell" width="30px" />
            <Typography variant="h6" component="div" sx={styles.typography}>
              <Link to="/" style={styles.link}>
                E a t W e l l
              </Link>
            </Typography>
            <Button sx={styles.button}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
