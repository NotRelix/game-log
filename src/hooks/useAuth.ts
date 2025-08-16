import { useEffect, useState } from "react";

interface AuthType {
  id: number;
  username: string;
  role: number;
  exp: number;
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<AuthType | null>(null);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  const token = localStorage.getItem("token");
  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setIsAuthenticated(false);
        return;
      }
      const response = await fetch("http://localhost:3000/auth/validate", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setIsAuthenticated(result.success);
      setUser(result.user ?? null);
    };
    validateToken();
  }, [token]);

  return { isAuthenticated, user, logout };
};
