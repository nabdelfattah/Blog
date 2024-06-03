import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { AppContext } from "../AppContext";
import { ArticleCard } from "../components";

export function HomePage() {
  const { articles } = useContext(AppContext);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [articlesCount, setArticlesCount] = useState(9); // Number of articles to show initially

  // Load initial articles on component mount or when articles change
  useEffect(() => {
    setDisplayedArticles(articles.slice(0, articlesCount));
  }, [articles, articlesCount]);

  let content;
  if (!displayedArticles.length) {
    content = <p className={styles.noResult}>No result</p>;
  } else {
    content = displayedArticles.map((obj) => {
      return (
        <li key={obj.key}>
          <Link to={`/article/${obj.heading}`}>
            <ArticleCard data={obj} />
          </Link>
        </li>
      );
    });
  }

  function loadMoreHandler() {
    const newCount = articlesCount + 6; // Load 6 more articles
    setArticlesCount(newCount);
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.cardsGrid}>{content}</ul>
      {articles.length > displayedArticles.length && (
        <button onClick={loadMoreHandler} className={styles.loadMoreBtn}>
          Load more
        </button>
      )}
    </div>
  );
}
