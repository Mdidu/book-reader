import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navigation/Navbar";
import CardBook from "./components/UI/CardBook";
import CategoryList from "./components/UI/CategoryList";
// import MenuSelect from "./components/UI/MenuSelect";

function App() {
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
  const book = {
    link: "reincarnation",
    img: "https://novelfull.com/uploads/thumbs/reincarnation-of-the-strongest-s-4064914555-95b0d895802d6bf275654366a00ab724.png",
    title: "Reincarnation Of The Strongest Sword God",
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <CategoryList title="Genres" categories={genres} />
      <CardBook book={book} />
      <Routes>{/* <Route path="/genre/:name" element={<Test />} /> */}</Routes>
    </div>
  );
}

export default App;
