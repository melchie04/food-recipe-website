import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Toolbar, AppBar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import eatwell from "../assets/logo/eatwell.png";
import { theme, styles } from "../styles/HeaderStyles";

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
            {/* <Button sx={styles.button}>Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
