import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { AppContext } from "../AppContext";
import { ArticleCard } from "../components";

export function HomePage() {
  const { articles } = useContext(AppContext);
  // console.log({ articles });
  let content;
  if (!articles.length) {
    content = <p className={styles.noResult}>No result</p>;
    console.log(content);
  } else {
    content = articles.map((obj) => {
      return (
        <li key={obj.key}>
          <Link to={`/article/:${obj.heading}`}>
            <ArticleCard data={obj}></ArticleCard>
          </Link>
        </li>
      );
    });
  }
  return (
    <div className={styles.wrapper}>
      <ul className={styles.cardsGrid}>{content}</ul>
      <button className={styles.loadMoreBtn}>Load more</button>
    </div>
  );
}
