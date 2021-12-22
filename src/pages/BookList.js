import React from "react";
import CategoryList from "../components/UI/CategoryList";
import styles from "./BookList.module.css";
import bookDatas from "../datas/book.json";
import { Link, useLocation } from "react-router-dom";

const BookList = () => {
  const location = useLocation();
  const genre = location.state;

  const renderedList = bookDatas
    .filter((value) => value.genre === genre)
    .map((book) => (
      <tr key={book.id}>
        <td colSpan="1">
          <img src={book.image} alt={`${book.title}`} width="150" height="120" />
        </td>
        <td className={styles.test}>
          <div className={styles.book__title}>
            <Link
              to={{ pathname: `/book/${book.link}` }}
              state={ book }
            >
              {book.title}
            </Link>
          </div>
          <div className={styles.book__author}>{book.author}</div>
        </td>
        <td>
          <Link
            to={{ pathname: `/book/${book.link}/${book.chapter.length}` }}
            state={book.chapter}
          >
            Chapitre {book.chapter.length}
          </Link>
        </td>
      </tr>
    ));

  return (
    <div className={styles.bookList__pages}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan="2">List of {genre} Best Novel</th>
          </tr>
        </thead>
        <tbody>{renderedList}</tbody>
      </table>
      <CategoryList title="Genres" />
    </div>
  );
};

export default BookList;
