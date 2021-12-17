import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navigation/Navbar";
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

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <CategoryList title="Genres" categories={genres} />
      <Routes>{/* <Route path="/genre/:name" element={<Test />} /> */}</Routes>
    </div>
  );
}

export default App;
