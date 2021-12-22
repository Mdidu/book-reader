import React, { useState } from "react";
import BurgerMenu from "../../UI/menu/BurgerMenu";
import MenuSelect from "../../UI/menu/MenuSelect";
import styles from "./Navbar.module.css";
import genres from "../../../datas/genre.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [display, setDisplay] = useState(false);

  const hiddenClass = display ? "" : styles.hidden;

  const displayMenu = () => {
    setDisplay(!display);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to={{ pathname: "" }}>BOOK</Link>
        </li>
        <div className={`${styles.allMenu} ${hiddenClass}`}>
          <MenuSelect title="Genre ▼" datas={genres} route={"genre"} />
        </div>
      </ul>
      <BurgerMenu onClick={displayMenu} />
    </nav>
  );
};

export default Navbar;
