import styles from "./PageLayout.module.css";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import AppContextProvider from "../AppContext";

export function PageLayout() {
  return (
    <AppContextProvider>
      <div className={styles.container}>
        <Header />
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
      </div>
    </AppContextProvider>
  );
}
