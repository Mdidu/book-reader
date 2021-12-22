import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardBook.module.css";

const CardBook = (props) => {
  const { link, image, title } = props.book;
  
  return (
    <div>
      <Link className={styles.cardLink} to={`book/${link}`} state={props.book}>
        <div className={styles.titleBook}>{title}</div>
        <img src={image} alt={title} height="150" width="150" />
      </Link>
    </div>
  );
};

export default CardBook;
