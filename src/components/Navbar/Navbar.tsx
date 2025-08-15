import { useContext } from "react";
import styles from "./Navbar.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("Navbar must be used inside a DarkModeProvider");
  const { darkMode, toggleDarkMode } = context;
  return (
    <nav className={`${styles.navbar} ${darkMode && styles.dark}`}>
      <div>
        <Link className={styles.logo} to={"/"}>Game Log</Link>
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
