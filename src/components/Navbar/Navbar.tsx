import { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { CircleUserRound, Moon, Sun } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("Navbar must be used inside a DarkModeProvider");
  const { darkMode, toggleDarkMode } = context;
  return (
    <nav className={`${styles.navbar} ${darkMode && styles.dark}`}>
      <div>
        <Link className={styles.logo} to={"/"}>
          Game Log
        </Link>
      </div>
      <div className={styles.menuContainer}>
        {darkMode ? (
          <Sun className={styles.toggleTheme} onClick={toggleDarkMode} />
        ) : (
          <Moon className={styles.toggleTheme} onClick={toggleDarkMode} />
        )}
        <div className={styles.profileContainer}>
          <CircleUserRound
            onClick={() => setMenuOpen(!menuOpen)}
            className={styles.profileIcon}
          />
          <div
            className={`${styles.menuDropDown} ${menuOpen ? styles.show : ""} ${
              darkMode ? styles.dark : ""
            }`}
          >
            <span>User</span>
            <span>User</span>
            <span>User</span>
          </div>
          <div
            onClick={() => setMenuOpen(false)}
            className={`${styles.backdrop} ${
              menuOpen ? styles.showBackdrop : ""
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
