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
