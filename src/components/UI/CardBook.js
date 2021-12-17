import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardBook.module.css";

const CardBook = (props) => {
  const { link, img, title } = props.book;

  return (
    <div>
      <Link className={styles.cardLink} to={link}>
        <div className={styles.titleBook}>{title}</div>
        <img src={img} alt={title} />
      </Link>
    </div>
  );
};

export default CardBook;
