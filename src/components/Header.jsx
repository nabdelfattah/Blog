import styles from "./Header.module.css";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search-outline.svg";
import data from "../content.json";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

function filterArticles(query, list) {
  return list.filter((el) => {
    // console.log(el.heading);
    return el.heading.includes(query);
  });
}

export function Header() {
  const { setArticles } = useContext(AppContext);
  const navigateTo = useNavigate();

  function searchHandler(e) {
    e.preventDefault();
    const result = filterArticles(e.target.value, data);
    // console.log({ result });
    setArticles(result);
    navigateTo("/");
  }

  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} />
        <p>Blog</p>
      </div>
      <p className={styles.home}>Home</p>
      <form>
        <input type="text" placeholder="Search" onChange={searchHandler} />
        <img src={searchIcon} />
      </form>
    </header>
  );
}
