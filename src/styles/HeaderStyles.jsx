import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ef6d24",
    },
  },
});

export const styles = {
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
