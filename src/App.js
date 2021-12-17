import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navigation/Navbar";
// import MenuSelect from "./components/UI/MenuSelect";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        {/* <Route path="/genre/:name" element={<Test />} /> */}
      </Routes>
    </div>
  );
}

export default App;
