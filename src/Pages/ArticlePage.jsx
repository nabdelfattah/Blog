import { useNavigate, useParams } from "react-router-dom";
import data from "../content.json";
import styles from "./ArticlePage.module.css";
import { useEffect, useState } from "react";
import {
  Image,
  Title,
  Text,
  Ads,
  Quote,
} from "../components/ArticleComponents";

function loadArticle(title) {
  const filteredArticles = data.filter((obj) => obj.heading == title);
  return filteredArticles[0];
}

export function ArticlePage() {
  const navigator = useNavigate();
  const params = useParams();
  const decodedTitle = decodeURIComponent(params.title);
  const articleObj = loadArticle(decodedTitle);

  const [authorImg, setAuthorImg] = useState();

  // SCROLLED TO TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // LOAD AUTHOR's IMAGES
  useEffect(() => {
    if (!articleObj) {
      navigator("/");
      return;
    }
    async function loadImage() {
      const authorImg = await import(articleObj["author-img"]);
      setAuthorImg(authorImg.default);
    }
    loadImage();
  }, []);

  // CONVERT ARTICLE CONTENT INTO COMPONENTS
  let content;
  if (articleObj) {
    content = articleObj.content.map((obj, index) => {
      switch (Object.keys(obj)[0]) {
        case "img":
          return <Image key={index} reference={obj.img}></Image>;
        case "text":
          return <Text key={index}>{obj.text}</Text>;
        case "title":
          return <Title key={index}>{obj.title}</Title>;
        case "ads":
          return <Ads key={index} info={obj.ads}></Ads>;
        case "quote":
          return <Quote key={index}>{obj.quote}</Quote>;
      }
    });
  } else {
    content = "";
  }

  return (
    articleObj && (
      <article className={styles.article}>
        <span className={styles.tag}>{articleObj.tag}</span>
        <h2 className={styles.heading}>{articleObj.heading}</h2>
        <div className={styles.authorWrapper}>
          {authorImg && <img className={styles.authorImg} src={authorImg} />}
          <p className={styles.authorName}>{articleObj["author-name"]}</p>
          <p className={styles.date}>{articleObj.date}</p>
        </div>
        <div className={styles.content}>{content}</div>
      </article>
    )
  );
}
