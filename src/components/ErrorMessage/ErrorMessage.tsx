import { useEffect, useRef } from "react";
import styles from "./ErrorMessage.module.css";
import { Bounce, toast } from "react-toastify";

interface ErrorMessageType {
  errors: string[];
  darkMode: boolean;
}

const ErrorMessage = ({ errors, darkMode }: ErrorMessageType) => {
  const toastIds = useRef<string[]>([]);
  useEffect(() => {
    errors.map((error, index) => {
      setTimeout(() => {
        const id = toast.error(error, {
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
        toastIds.current.push(id.toString());
      }, index * 50);
    });
  }, [errors]);

  useEffect(() => {
    toastIds.current.map((id) => {
      toast.update(id, {
        className: darkMode ? styles.errorDark : styles.errorLight,
        theme: darkMode ? "dark" : "light",
      });
    });
  }, [darkMode]);

  return null;
};

export default ErrorMessage;
