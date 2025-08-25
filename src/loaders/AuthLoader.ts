import { redirect } from "react-router-dom";

export const AuthLoader = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${import.meta.env.VITE_API_URL}auth/validate`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();

  if (result.success) {
    return redirect("/posts");
  }

  return null;
};
