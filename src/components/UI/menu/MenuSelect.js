import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuSelect.module.css";

const MenuSelect = (props) => {
  const { title, datas, route = "" } = props;

  const baseRoute = route !== "" ? "/genre" : "";

  const renderedDatas = datas.map((value) => (
    <li key={value}>
      <Link
        to={{
          pathname: `${baseRoute}/${value}`,
        }}
      >
        {value}
      </Link>
    </li>
  ));

  return (
    <li className={`${styles.menuTitle}`}>
      {title}
      <ul className={styles.dropdownMenu}>{renderedDatas}</ul>
    </li>
  );
};

export default MenuSelect;
