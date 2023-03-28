import React from "react";
import { Box, Pagination, PaginationItem } from "@mui/material";
import { useMealContext } from "../utilities/Context";
import { ACTIONS } from "../utilities/Actions";

const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const styles = {
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

const Paging = () => {
  const { selectedLetter, setSelectedLetter, setActions } = useMealContext();

  const handleLetterChange = (event, value) => {
    setSelectedLetter(String.fromCharCode(65 + value - 1));
    setActions(ACTIONS.SELECT_LETTER);
  };

  const convertLetterToNumber = (letter) => {
    if (letter !== "") {
      return letter.toString().toLowerCase().charCodeAt(0) - 96;
    } else {
      return 0;
    }
  };

  return (
    <Box sx={styles.container}>
      <Pagination
        sx={styles.pagination}
        count={26}
        shape="rounded"
        variant="outlined"
        page={convertLetterToNumber(selectedLetter)}
        onChange={(event, value) => handleLetterChange(event, value)}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            page={alphabet[item.page - 1]}
            sx={styles.paginationItem}
          />
        )}
      />
    </Box>
  );
};

export default Paging;
