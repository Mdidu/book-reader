import React, { useState } from "react";
import BurgerMenu from "../../UI/menu/BurgerMenu";
import MenuSelect from "../../UI/menu/MenuSelect";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [display, setDisplay] = useState(false);

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

  const bookListState = [
    "Latest Release",
    "Hot Book",
    "Completed Book",
    "Most Popular",
  ];

  const hiddenClass = display ? "" : styles.hidden;

  const displayMenu = () => {
    setDisplay(!display);
  };

  return (
    <nav>
      <ul>
        <li>BOOK</li>
        <div className={`${styles.allMenu} ${hiddenClass}`}>
          <MenuSelect title="Book List ▼" datas={bookListState} />
          <MenuSelect title="Genre ▼" datas={genres} route={"genre"} />
        </div>
      </ul>
      <BurgerMenu onClick={displayMenu} />
    </nav>
  );
};

export default Navbar;
