import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Root.module.css";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const Root = () => {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("Root must be used inside a DarkModeProvider");
  const { darkMode } = context;
  return (
    <div className={`${styles.container} ${darkMode && styles.dark}`}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
