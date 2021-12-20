import React from "react";
import CardBook from "../components/UI/CardBook";
import CategoryList from "../components/UI/CategoryList";
import genres from "../datas/genre.json";

const Home = () => {
  return (
    <div>
      <CategoryList title="Genres" categories={genres} />
      {/* <CardBook book={book} /> */}
    </div>
  );
};

export default Home;
