import { useEffect, useState } from "react";

interface AuthType {
  id: number;
  username: string;
  role: number;
  exp: number;
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<AuthType>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }
    const validateToken = async () => {
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
  }, []);

  return { isAuthenticated, user };
};
