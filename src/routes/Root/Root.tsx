import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Root.module.css";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import Footer from "../../components/Footer/Footer";
import { MessageContext } from "../../context/MessageContext";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";
import { Bounce, ToastContainer } from "react-toastify";
import LoginPopup from "../../components/LoginPopup/LoginPopup";

const Root = () => {
  const { errors, success } = useContext(MessageContext)!;
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("Root must be used inside a DarkModeProvider");
  const { darkMode } = context;
  return (
    <div className={`${styles.container} ${darkMode && styles.dark}`}>
      <div className={styles.screenContainer}>
        <LoginPopup />
        <Navbar />
        <main className={styles.main}>
          <ToastContainer
            toastClassName={() =>
              darkMode ? styles.errorDark : styles.errorLight
            }
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Bounce}
          />
          <ErrorMessage errors={errors} darkMode={darkMode} />
          <SuccessMessage success={success} darkMode={darkMode} />
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
