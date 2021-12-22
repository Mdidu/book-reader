import React from "react";
import CardBook from "../components/UI/CardBook";
import bookDatas from "../datas/book.json";
import styles from "./Home.module.css";

const Home = () => {
  const renderedCardBooks = bookDatas.map((book) => <CardBook book={book} />);
  return (
    <div>
      <h1 className={styles.home__h1}>Tous les livres</h1>
      <div className={styles.home__allCard}>{renderedCardBooks}</div>
    </div>
  );
};

export default Home;
