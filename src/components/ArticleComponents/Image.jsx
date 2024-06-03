import styles from "./Image.module.css";

export function Image(props) {
  return (
    <img
      src={props.reference[props.index]}
      alt="articl's image"
      className={styles.img}
    />
  );
}
