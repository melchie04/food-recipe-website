import React from "react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    height: "70vh",
    marginTop: "3rem",
  },
};

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1>Page Not Found.</h1>
    </div>
  );
};

export default NotFound;
