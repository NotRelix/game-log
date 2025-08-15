import { useContext } from "react";
import styles from "./Navbar.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("Navbar must be used inside a DarkModeProvider");
  const { darkMode, toggleDarkMode } = context;
  return (
    <nav className={`${styles.navbar} ${darkMode && styles.dark}`}>
      <div>
        <h1>Game-Log</h1>
      </div>
      <div className={styles.menuContainer}>
        {darkMode ? (
          <Sun className={styles.toggleTheme} onClick={toggleDarkMode} />
        ) : (
          <Moon className={styles.toggleTheme} onClick={toggleDarkMode} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
