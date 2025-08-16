import { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { CircleUserRound, Moon, Sun } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const guestMenuLinks = [
  {
    id: 1,
    name: "Login",
    redirect: "/login",
  },
  {
    id: 2,
    name: "Register",
    redirect: "/register",
  },
];

const loggedInMenuLinks = [
  {
    id: 1,
    name: "Posts",
    redirect: "/posts",
  },
  {
    id: 2,
    name: "Author Website",
    redirect: "/",
  },
  {
    id: 3,
    name: "Logout",
    redirect: "/",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("Navbar must be used inside a DarkModeProvider");
  const { darkMode, toggleDarkMode } = context;
  const { isAuthenticated, user } = useAuth();

  const handleMenuOpen = () => {
    setIsMenuVisible(true);
    requestAnimationFrame(() => {
      setMenuOpen(true);
    });
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setTimeout(() => {
      setIsMenuVisible(false);
    }, 200);
  };

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
            onClick={handleMenuOpen}
            className={styles.profileIcon}
          />
          {isMenuVisible && (
            <>
              <div
                className={`${styles.menuDropDown} ${
                  menuOpen ? styles.show : ""
                } ${darkMode ? styles.dark : ""}`}
              >
                {isAuthenticated
                  ? loggedInMenuLinks.map((menu) => (
                      <Link
                        key={menu.id}
                        to={menu.redirect}
                        onClick={handleMenuClose}
                        className={styles.menuLink}
                      >
                        {menu.name}
                      </Link>
                    ))
                  : guestMenuLinks.map((menu) => (
                      <Link
                        key={menu.id}
                        to={menu.redirect}
                        onClick={handleMenuClose}
                        className={styles.menuLink}
                      >
                        {menu.name}
                      </Link>
                    ))}
              </div>
              <div
                onClick={handleMenuClose}
                className={`${styles.backdrop} ${
                  menuOpen ? styles.showBackdrop : ""
                }`}
              ></div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
