import React from "react";
import styles from "./CategoryList.module.css";

const CategoryList = (props) => {
  const { title, categories } = props;
  const renderedCategories = categories.map((category) => (
    <p className={styles.category}>{category}</p>
  ));

  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.categories}>{renderedCategories}</div>
    </div>
  );
};

export default CategoryList;
