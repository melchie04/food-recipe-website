import React from "react";
import { Box, Pagination, PaginationItem } from "@mui/material";
import { useMealContext } from "../context/Context";
import { updateMealListByLetter } from "../utilities/Action";
import { convertLetterToNumber } from "../utilities/Helpers";
import { styles } from "../styles/PagingStyles";

const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

const Paging = () => {
  const {
    state: { selectedLetter },
    dispatch,
    setMealListLoading,
  } = useMealContext();

  const handleLetterChange = (event, value) => {
    const selectedLetter = String.fromCharCode(65 + value - 1);
    updateMealListByLetter(dispatch, selectedLetter, setMealListLoading);
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
