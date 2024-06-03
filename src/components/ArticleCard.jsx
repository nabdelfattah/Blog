import { useEffect, useState } from "react";
import styles from "./ArticleCard.module.css";

export function ArticleCard(props) {
  const [imgPrimary, setImgPrimary] = useState(props.images["img-primary"]);
  const [imgAuthor, setImgAuthor] = useState(props.images["author-img"]);

  // useEffect(() => {
  //   const loadImage = async () => {
  //     const imgP = await import(props.data["img-primary"]);
  //     setImgPrimary(imgP.default);
  //     const imgA = await import(props.data["author-img"]);
  //     setImgAuthor(imgA.default);
  //   };
  //   loadImage();
  // }, []);

  return (
    <article className={styles.card}>
      <img src={imgPrimary} className={styles.mainImg} />
      <span className={styles.tag}>{props.data.tag}</span>
      <h3 className={styles.heading}>{props.data.heading}</h3>
      <div className={styles.authorWrapper}>
        <img src={imgAuthor} />
        <p className={styles.authorName}>{props.data["author-name"]}</p>
        <p className={styles.authorName}>{props.data.date}</p>
      </div>
    </article>
  );
}
