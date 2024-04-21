import styles from "./Quote.module.css";
export function Quote(props) {
  return <blockquote className={styles.quote}>{props.children}</blockquote>;
}
