import { useNavigate, useParams } from "react-router-dom";
import data from "../content.json";
import styles from "./ArticlePage.module.css";
import { useEffect } from "react";
import {
  Image,
  Title,
  Text,
  Ads,
  Quote,
} from "../components/ArticleComponents";
import authorImg from "/people/person.svg?../../public/people/person.svg";
import img1 from "/lg-img/building-night.svg?../../public/lg-img/building-night.svg";
import img2 from "/lg-img/travel.svg?../../public/lg-img/travel.svg";

function loadArticle(title) {
  const filteredArticles = data.filter((obj) => obj.heading == title);
  return filteredArticles[0];
}

const articleImgs = [img1, img2];

export function ArticlePage() {
  const navigator = useNavigate();
  const params = useParams();
  const decodedTitle = decodeURIComponent(params.title);
  const articleObj = loadArticle(decodedTitle);

  // SCROLLED TO TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!articleObj) {
      navigator("/");
      return;
    }
  }, []);

  // CONVERT ARTICLE CONTENT INTO COMPONENTS
  let content;
  if (articleObj) {
    let counter = 0;
    content = articleObj.content.map((obj, index) => {
      let component;
      switch (Object.keys(obj)[0]) {
        case "img":
          component = (
            <Image key={index} reference={articleImgs} index={counter}></Image>
          );
          break;
        case "text":
          return <Text key={index}>{obj.text}</Text>;
        case "title":
          return <Title key={index}>{obj.title}</Title>;
        case "ads":
          return <Ads key={index} info={obj.ads}></Ads>;
        case "quote":
          return <Quote key={index}>{obj.quote}</Quote>;
      }
      counter++;
      return component;
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
