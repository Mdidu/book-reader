import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./BookDetail.module.css";

const BookDetail = () => {
  let location = useLocation();

  const locationState = location.state;

  const bookData = locationState.state;
  const chapters = bookData.chapter;

  const renderedChapter = chapters.map((chapter, i, arr) =>
    i % 2 === 0 ? (
      <tr key={i}>
        <td>
          Chapitre {i + 1} - {chapter}
        </td>
        <td>
          {arr[i + 1] === undefined ? "" : `Chapitre ${i + 2} - ${arr[i + 1]}`}
        </td>
      </tr>
    ) : (
      <></>
    )
  );

  return (
    <div className={styles.bookDetail__pages}>
      <div className={styles.bookDetail__bookDescription}>
        <div>
          <img
            src={bookData.image}
            alt={bookData.title}
            width="150"
            height="80"
          />
          <div>
            <span className={styles.bookDetail__infoRow}>Author :</span>
            {bookData.author}
          </div>
          <div>
            <span className={styles.bookDetail__infoRow}>Genre :</span>
            {bookData.genre}
          </div>
          <div>
            <span className={styles.bookDetail__infoRow}>Status :</span>
            {bookData.status}
          </div>
        </div>
        <div className={styles.bookDetail__body}>
          <h1>{bookData.title}</h1>
          <div>{bookData.summary}</div>
        </div>
      </div>
      <table className={styles.bookDetail__table}>
        <thead>
          <tr>
            <th>Liste des chapitres</th>
          </tr>
        </thead>
        <tbody>{renderedChapter}</tbody>
      </table>
    </div>
  );
};

export default BookDetail;
