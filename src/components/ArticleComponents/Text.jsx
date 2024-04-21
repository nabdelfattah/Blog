import styles from "./Text.module.css";
export function Text(props) {
  return <p className={styles.text}>{props.children}</p>;
}
