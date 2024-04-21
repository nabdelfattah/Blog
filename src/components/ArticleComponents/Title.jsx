import styles from "./Title.module.css";
export function Title(props) {
  return <p className={styles.title}>{props.children}</p>;
}
