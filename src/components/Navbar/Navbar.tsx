import { useContext } from "react";
import styles from "./Navbar.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("Navbar must be used inside a DarkModeProvider");
  }
  const { darkMode, toggleDarkMode } = context;
  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.dark : ""}`}>
      <h1>Game-Log</h1>
      <button onClick={toggleDarkMode}>Toggle Mode</button>
    </nav>
  );
};

export default Navbar;
