export const styles = {
  container: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    margin: "2rem 5rem",
    "@media (max-width: 600px)": {
      margin: "2rem 3rem",
    },
    "@media (max-width: 420px)": {
      margin: "2rem 1rem",
    },
  },
  button: {
    height: "40px",
    color: "#ef6d24",
    fontWeight: "bold",
    borderColor: "#ef6d24",
    borderWidth: "2px",
    margin: "auto 5px",
    "&:hover": {
      borderColor: "#ef6d24",
      borderWidth: "2px",
      transform: "scale(1.1)",
    },
  },
  link: {
    color: "#000000",
    textDecoration: "none",
    maxWidth: "100%",
    height: "100%",
  },
};
