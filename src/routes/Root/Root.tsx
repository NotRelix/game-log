import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Root.module.css";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import Footer from "../../components/Footer/Footer";
import { MessageContext } from "../../context/MessageContext";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";

const Root = () => {
  const { errors, success } = useContext(MessageContext)!;
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("Root must be used inside a DarkModeProvider");
  const { darkMode } = context;
  return (
    <div className={`${styles.container} ${darkMode && styles.dark}`}>
      <div className={styles.screenContainer}>
        <Navbar />
        <main className={styles.main}>
          <ErrorMessage errors={errors} darkMode={darkMode} />
          {success.length > 0 && <SuccessMessage success={success} />}
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
