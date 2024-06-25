import { useState } from "react";
import styles from "./ArticleCard.module.css";

export function ArticleCard(props) {
  const [imgPrimary, setImgPrimary] = useState(props.images["img-primary"]);
  const [imgAuthor, setImgAuthor] = useState(props.images["author-img"]);

  return (
    <article className={styles.card}>
      <img src={imgPrimary} className={styles.mainImg} alt={props.data.alt} />
      <span className={styles.tag}>{props.data.tag}</span>
      <h3 className={styles.heading}>{props.data.heading}</h3>
      <div className={styles.authorWrapper}>
        <img src={imgAuthor} alt="the image of the author" />
        <p className={styles.authorName}>{props.data["author-name"]}</p>
        <p className={styles.authorName}>{props.data.date}</p>
      </div>
    </article>
  );
}
