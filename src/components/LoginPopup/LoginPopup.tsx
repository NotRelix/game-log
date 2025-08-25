import { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import styles from "./LoginPopup.module.css";
import { Link } from "react-router";
import { DarkModeContext } from "../../context/DarkModeContext";

const LoginPopup = () => {
  const darkModeContext = useContext(DarkModeContext);
  const popupContext = useContext(PopupContext);
  if (!darkModeContext) {
    throw new Error("LoginPopup must be used inside a DarkModeProvider");
  }
  if (!popupContext) {
    throw new Error("LoginPopup must be used inside a PopupProvider");
  }
  const { darkMode } = darkModeContext;
  const {
    loginPopupOpen,
    isLoginPopupVisible,
    setLoginPopupOpen,
    setIsLoginPopupVisible,
  } = popupContext;

  const handleClose = () => {
    setIsLoginPopupVisible(false);
    setTimeout(() => {
      setLoginPopupOpen(false);
    }, 200);
  };

  if (loginPopupOpen) {
    return (
      <>
        <div
          className={`${styles.loginBackdrop} ${darkMode ? styles.dark : ""} ${
            isLoginPopupVisible ? styles.show : ""
          }`}
          onClick={handleClose}
        ></div>
        <div
          className={`${styles.loginPopupContainer} ${
            darkMode ? styles.dark : ""
          } ${isLoginPopupVisible ? styles.show : ""}`}
        >
          <h1 className={styles.loginPopupHeading}>
            Want to comment something?
          </h1>
          <p className={styles.loginPopupText}>Login to continue</p>
          <Link className={styles.loginBtn} to={"/login"} onClick={handleClose}>
            Login
          </Link>
        </div>
      </>
    );
  }
};

export default LoginPopup;
