import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navigation/Navbar";
import BookDetail from "./pages/BookDetail";
import BookList from "./pages/BookList";
import Home from "./pages/Home";

function App() {
  // const book = {
  //   link: "reincarnation",
  //   img: "https://novelfull.com/uploads/thumbs/reincarnation-of-the-strongest-s-4064914555-95b0d895802d6bf275654366a00ab724.png",
  //   title: "Reincarnation Of The Strongest Sword God",
  // };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      {/* <BookList /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre/:name" element={<BookList />} />
        <Route path="/book/:name" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
