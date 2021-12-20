import React from "react";
import CardBook from "../components/UI/CardBook";
import CategoryList from "../components/UI/CategoryList";

const Home = () => {
  return (
    <div>
      <CategoryList title="Genres" />
      {/* <CardBook book={book} /> */}
    </div>
  );
};

export default Home;
