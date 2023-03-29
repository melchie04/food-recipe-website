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
  pagination: {
    "& .Mui-selected": {
      backgroundColor: "#9f4818 !important",
      "& .MuiPaginationItem-icon": {
        backgroundColor: "#9f4818 !important",
      },
    },
    "& .Mui-selected:hover": {
      backgroundColor: "#9f4818 !important",
    },
    "& .MuiPaginationItem-root:hover": {
      backgroundColor: "#9f4818 !important",
    },
  },
  paginationItem: {
    backgroundColor: "#ef6d24",
    color: "#ffffff",
  },
};
