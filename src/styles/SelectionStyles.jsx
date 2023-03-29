export const styles = {
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
  formControl: {
    minWidth: "150px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#ef6d24",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#ef6d24 !important",
    },
  },
  select: {
    marginRight: "10px",
    height: "40px",
    fontWeight: "bold",
    color: "#ef6d24",
    borderWidth: "2px",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: "#ef6d24",
    },
  },
  label: {
    fontWeight: "bold",
    color: "#ef6d24",
    "&.Mui-focused": {
      color: "#ef6d24",
    },
  },
  menuItem: {
    fontWeight: "bold",
    color: "#ef6d24",
    "&:hover": {
      backgroundColor: "#ef6d24 !important",
      color: "#ffffff",
    },
  },
  button: {
    height: "40px",
    color: "#ef6d24",
    fontWeight: "bold",
    borderColor: "#ef6d24",
    borderWidth: "2px",
    "&:hover": {
      backgroundColor: "#ef6d24",
      borderColor: "#ef6d24",
      borderWidth: "2px",
      color: "#ffffff",
    },
  },
  link: {
    color: "#000000",
    textDecoration: "none",
    maxWidth: "100%",
    height: "100%",
  },
};
