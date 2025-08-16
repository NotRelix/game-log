import { useEffect, useRef } from "react";
import { Bounce, toast } from "react-toastify";
import styles from "../ErrorMessage/ErrorMessage.module.css";

type SuccessMessageProps = {
  success: string[];
  darkMode: boolean;
};

const SuccessMessage = ({ success, darkMode }: SuccessMessageProps) => {
  const toastIds = useRef<string[]>([]);
  useEffect(() => {
    success.map((msg, index) => {
      setTimeout(() => {
        const id = toast.success(msg, {
          toastId: `success-${msg}`,
          className: darkMode ? styles.errorDark : styles.errorLight,
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        toastIds.current.push(id.toString());
      }, index * 50);
    });
  }, [success]);

  useEffect(() => {
    toastIds.current.map((tid) => {
      toast.update(tid, {
        className: darkMode ? styles.errorDark : styles.errorLight,
        theme: darkMode ? "dark" : "light",
      });
    });
  }, [darkMode]);

  return null;
};

export default SuccessMessage;
