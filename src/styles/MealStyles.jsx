export const styles = {
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
