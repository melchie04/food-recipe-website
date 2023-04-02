import React from "react";
import theMealDb from "../assets/logo/the-meal-db.png";
import { styles } from "../styles/FooterStyles";

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
