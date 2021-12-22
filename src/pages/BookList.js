import React, { useEffect, useState } from "react";
import CategoryList from "../components/UI/CategoryList";
import styles from "./BookList.module.css";
import bookDatas from "../datas/book.json";
import { Link, useParams } from "react-router-dom";

const BookList = () => {
  const { name } = useParams();
  // const [datas, setDatas] = useState({
  //   id: 0,
  //   title: "",
  //   author: "",
  //   image: "",
  //   status: "",
  //   summary: "",
  //   genre: "",
  //   nbChapter: 0,
  // });

  // const url =
  //   // "https://react-book-reader-default-rtdb.europe-west1.firebasedatabase.app/react-book-reader/firestore/data/~2Fbook~2F8DRduQcK5VrSIGx4C1pQ.json";
  //   "https://react-book-reader-default-rtdb.europe-west1.firebasedatabase.app/book.json";

  // const bookDatas = async () => {
  //   const res = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   });
  //   return await res.json();
  // };

  // useEffect(async () => {
  //   const result = await bookDatas();
  //   await setDatas(result);
  // }, []);

  const renderedList = bookDatas.map((book) => (
    <tr key={book.id}>
      <td colSpan="1">
        <img src={book.image} alt={`${book.title}`} width="150" height="80" />
      </td>
      <td className={styles.test}>
        <div className={styles.book__title}>
          <Link to={{ pathname: `/book/${book.link}` }} state={{ state: book }}>
            {book.title}
          </Link>
        </div>
        <div className={styles.book__author}>{book.author}</div>
      </td>
      <td>
        <Link
          to={{ pathname: `/book/${book.link}/${book.chapter.length}` }}
          state={book.chapter }
        >
          Chapitre {book.chapter.length}
        </Link>
      </td>
    </tr>
  ));

  return (
    <div className={styles.bookList__pages}>
      {/* {datas.title} */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan="2">List of {name} Best Novel</th>
          </tr>
        </thead>
        <tbody>{renderedList}</tbody>
      </table>
      <CategoryList title="Genres" />
    </div>
  );
};

export default BookList;
