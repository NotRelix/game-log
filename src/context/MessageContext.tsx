import { createContext, useState, type ReactNode } from "react";

interface MessageContextType {
  errors: string[];
  success: string[];
  setErrors: (msg: string[]) => void;
  setSuccess: (msg: string[]) => void;
  clearMessages: () => void;
}

export const MessageContext = createContext<MessageContextType | null>(null);

interface MessageProviderProps {
  children: ReactNode;
}

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string[]>([]);

  const clearMessages = () => {
    setErrors([]);
    setSuccess([]);
  };

  return (
    <MessageContext.Provider
      value={{
        errors,
        success,
        setErrors,
        setSuccess,
        clearMessages,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
