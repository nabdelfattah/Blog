import styles from "./Ads.module.css";
export function Ads(props) {
  return (
    <div className={styles.adsWrapper}>
      <p className={styles.advertisment}>{props.info[0]}</p>
      <p className={styles.place}>{props.info[1]}</p>
      <p className={styles.dimention}>{props.info[2]}</p>
    </div>
  );
}
