import imageBanner from "../assets/image-banner.jpg";

export const styles = {
  banner: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageBanner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#dfc38b",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 16px",
    textAlign: "center",
    color: "#ffffff",
  },
  searchBox: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    padding: "5px 20px",
    maxWidth: "700px",
    width: "100%",
  },
  searchInput: {
    fontSize: "1.2rem",
    marginLeft: 8,
    flex: 1,
  },
  searchButton: {
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
  header: {
    fontWeight: "bold",
    fontSize: 48,
    marginBottom: 3,
  },
  span: {
    color: "#ef6d24",
  },
  paragraph: {
    fontSize: 24,
    marginBottom: 3,
  },
};
