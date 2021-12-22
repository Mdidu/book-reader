import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../components/UI/Button";
import styles from "./BookRead.module.css";

const BookRead = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  let location = useLocation();

  const allChapters = location.state;
  const currentChapter = allChapters[id - 1];

  const previousHandler = () => {
    navigate(`./../${+id - 1}`, { replace: true, state: allChapters });
  };
  const nextHandler = () => {
    navigate(`./../${+id + 1}`, { replace: true, state: allChapters });
  };
  const handleChange = (value) => {
    navigate(`./../${+value + 1}`, { replace: true, state: allChapters });
  };

  const listChapters = allChapters.map((chapter, i) => (
    <option
      value={i}
      selected={chapter.title === currentChapter.title ? true : false}
    >
      {chapter.title}
    </option>
  ));
  return (
    <div className={styles.bookRead__pages}>
      <div className={styles.bookRead__navChapter}>
        <Button
          type="button"
          onClick={previousHandler}
          disabled={id == 1 ? true : false}
          className={styles.bookRead__btn}
        >
          ◄ Chapitre précédent
        </Button>
        <select
          name="chapters"
          id="chapters"
          onChange={(e) => handleChange(e.target.value)}
        >
          {listChapters}
        </select>
        <Button
          type="button"
          onClick={nextHandler}
          disabled={+id === allChapters.length ? true : false}
          className={styles.bookRead__btn}
        >
          Chapitre suivant ►
        </Button>
      </div>

      <h1>{currentChapter.title}</h1>
      <p className={styles.bookRead__body}>{currentChapter.body}</p>
    </div>
  );
};

export default BookRead;
