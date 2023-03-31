export const styles = {
  banner: {
    backgroundColor: "rgba(0,0,0,0.60)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
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
    color: "#fd7a02",
  },
  paragraph: {
    fontSize: 24,
    marginBottom: 3,
  },
};
