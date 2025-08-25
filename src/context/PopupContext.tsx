import { createContext, useState, type ReactNode } from "react";

interface PopupContextType {
  loginPopupOpen: boolean;
  setLoginPopupOpen: (value: boolean) => void;
  isLoginPopupVisible: boolean;
  setIsLoginPopupVisible: (value: boolean) => void;
}

export const PopupContext = createContext<PopupContextType | null>(null);

interface PopupProviderProps {
  children: ReactNode;
}

export const PopupProvider = ({ children }: PopupProviderProps) => {
  const [loginPopupOpen, setLoginPopupOpen] = useState<boolean>(false);
  const [isLoginPopupVisible, setIsLoginPopupVisible] =
    useState<boolean>(false);
  return (
    <PopupContext.Provider
      value={{
        loginPopupOpen,
        setLoginPopupOpen,
        isLoginPopupVisible,
        setIsLoginPopupVisible,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
