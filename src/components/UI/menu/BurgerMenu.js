import React from "react";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = (props) => {
  return (
    <button className={styles.burger} onClick={props.onClick}>
      <span className={styles.bar}></span>
    </button>
  );
};

export default BurgerMenu;
