import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryList.module.css";
import categories from "../../datas/genre.json";

const CategoryList = (props) => {
  const { title } = props;
  const renderedCategories = categories.map((category) => (
    <p className={styles.category} key={category.id}>
      <Link
        to={{
          pathname: `/genre/${category.link}`,
        }}
        state={category.name}
      >
        {category.name}
      </Link>
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
