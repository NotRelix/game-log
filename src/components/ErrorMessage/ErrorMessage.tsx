import { useEffect, type JSX } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

interface ErrorMessageType {
  errors: string[];
  darkMode: boolean;
}

const ErrorMessage = ({ errors, darkMode }: ErrorMessageType): JSX.Element => {
  useEffect(() => {
    errors.map((error, index) => {
      setTimeout(() => {
        toast.error(error, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Bounce,
        });
      }, index * 50);
    });
  }, [errors, darkMode]);

  return (
    <ToastContainer
      key={darkMode ? "dark" : "light"}
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={darkMode ? "dark": "light"}
      transition={Bounce}
    />
  );
};

export default ErrorMessage;
