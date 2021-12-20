import React from "react";
import styles from "./CategoryList.module.css";
import categories from "../../datas/genre.json";

const CategoryList = (props) => {
  const { title } = props;
  const renderedCategories = categories.map((category) => (
    <p className={styles.category} key={category.id}>
      {category.name}
    </p>
  ));

  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.categories}>{renderedCategories}</div>
    </div>
  );
};

export default CategoryList;
