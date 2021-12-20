import React, { useEffect, useState } from "react";
import CategoryList from "../components/UI/CategoryList";
import styles from "./BookList.module.css";
import bookDatas from "../datas/book.json";
import { useParams } from "react-router-dom";

const BookList = () => {
  const { category } = useParams();
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

  const genres = [
    "Shonen",
    "Comedy",
    "Martial Arts",
    "School Life",
    "Mystery",
    "Romance",
    "Fantasy",
    "Horror",
    "Tragery",
    "Drama",
  ];

  const renderedList = bookDatas.map((obj) => (
    <tr key={obj.id}>
      <td colSpan="1">
        <img src={obj.image} alt={`${obj.title}`} width="150" height="80" />
      </td>
      <td className={styles.test}>
        <div className={styles.book__title}>{obj.title}</div>
        <div className={styles.book__author}>{obj.author}</div>
      </td>
      <td>Chapitre {obj.nbChapter}</td>
    </tr>
  ));

  return (
    <div className={styles.pages}>
      {/* {datas.title} */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan="2">List of {category} Best Novel</th>
          </tr>
        </thead>
        <tbody>{renderedList}</tbody>
      </table>
      <CategoryList title="Genres" categories={genres} />
    </div>
  );
};

export default BookList;
