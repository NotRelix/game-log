import { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";

const LoginPopup = () => {
  const popupContext = useContext(PopupContext);
  if (!popupContext) {
    throw new Error("LoginPopup must be used inside a PopupProvider");
  }
  const { loginPopupOpen, setLoginPopupOpen } = popupContext;
  if (loginPopupOpen) {
    return (
      <div onClick={() => setLoginPopupOpen(false)}>
        <h1>open</h1>
      </div>
    );
  }
};

export default LoginPopup;
