import React from "react";
import theMealDb from "../assets/the-meal-db.png";

const styles = {
  container: {
    backgroundColor: "#f9d3bf",
    color: "#000000",
    textAlign: "center",
    fontWeight: "light",
    padding: "1rem",
  },
  title: {
    margin: "0",
    padding: "0",
  },
  credits: {
    margin: "0",
    padding: "15px 0",
  },
  image: {
    padding: "0",
    margin: "0",
    cursor: "pointer",
  },
  depeloper: {
    margin: "0",
    padding: "0",
    color: "#999999",
  },
};

const Footer = () => {
  return (
    <footer style={styles.container}>
      <p style={styles.title}>© 2023 EatWell. All Rights Reserved.</p>
      <p style={styles.credits}>
        <span>Data provided by </span>
        <a href="https://www.themealdb.com/" target="_blank">
          <img
            style={styles.image}
            src={theMealDb}
            alt="theMealDb"
            width="120px"
          />
        </a>
      </p>
      <p style={styles.depeloper}>Developed by Melchor Bendanillo Callos</p>
    </footer>
  );
};

export default Footer;
