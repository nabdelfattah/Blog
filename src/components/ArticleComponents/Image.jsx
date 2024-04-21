import { useEffect, useState } from "react";
import styles from "./Image.module.css";

export function Image(props) {
  const [imgURL, setImgURL] = useState();

  useEffect(() => {
    async function loadImg() {
      const URL = await import(props.reference);
      setImgURL(URL.default);
    }
    loadImg();
  }, []);

  return <img src={imgURL} alt="articl's image" />;
}
