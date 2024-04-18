import styles from "./PageLayout.module.css";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

export function PageLayout() {
  return (
    <>
      <Header />
      <dic className={styles.contentWrapper}>
        <Outlet />
      </dic>
    </>
  );
}
