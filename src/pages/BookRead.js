import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
    <div>
      <button
        type="button"
        onClick={previousHandler}
        disabled={id == 1 ? true : false}
      >
        Chapitre précédent
      </button>
      <select
        name="chapters"
        id="chapters"
        onChange={(e) => handleChange(e.target.value)}
      >
        {listChapters}
      </select>
      <button
        type="button"
        onClick={nextHandler}
        disabled={+id === allChapters.length ? true : false}
      >
        Chapitre suivant
      </button>
      <h1>{currentChapter.title}</h1>
      <p>{currentChapter.body}</p>
    </div>
  );
};

export default BookRead;
