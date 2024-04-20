import styles from "./ErrorPage.module.css";

export function ErrorPage() {
  return (
    <div className={styles.errorWrapper}>
      <p className={styles.errorMsg}>Can't find this page</p>
      <p className={styles.errorMsg}>404</p>
    </div>
  );
}
