import { useEffect } from "react";
import styles from "./ErrorMessage.module.css";
import { Bounce, toast } from "react-toastify";

interface ErrorMessageType {
  errors: string[];
  darkMode: boolean;
}

const ErrorMessage = ({ errors, darkMode }: ErrorMessageType) => {
  useEffect(() => {
    errors.map((error, index) => {
      setTimeout(() => {
        toast.error(error, {
          toastId: `error-${error}`,
          className: darkMode ? styles.errorDark : styles.errorLight,
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: darkMode ? "dark" : "light",
          transition: Bounce,
        });
      }, index * 50);
    });
  }, [errors]);

  return null;
};

export default ErrorMessage;
