import { useContext, useState, type FormEvent } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";
import registerStyles from "../Register/Register.module.css";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import type { LoginType } from "../../types";

const emptyLogin: LoginType = {
  username: "",
  password: "",
};

const Login = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string[]>([]);
  const [data, setData] = useState<LoginType>(emptyLogin);
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("Register must be used inside a DarkModeProvider");
  const { darkMode } = context;
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setSuccess([]);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!result.success) {
        setErrors(result.messages);
      } else {
        localStorage.setItem("token", result.token);
        setSuccess(result.messages);
        navigate("/posts");
      }
    } catch (err) {
      setErrors(["Failed to login user"]);
      console.error(err);
    }
  };

  return (
    <div
      className={`${registerStyles.container} ${
        darkMode ? registerStyles.dark : ""
      }`}
    >
      <div className={registerStyles.loginContainer}>
        <h1 className={registerStyles.header}>Login</h1>
        {errors.length > 0 && <ErrorMessage errors={errors} />}
        {success.length > 0 && <SuccessMessage success={success} />}
        <p>
          Already have an account?{" "}
          <Link className={registerStyles.redirect} to={"/register"}>
            Register
          </Link>
        </p>
        <form onSubmit={handleSubmit} className={registerStyles.form}>
          <label className={registerStyles.label} htmlFor="username">
            Username
          </label>
          <input
            className={registerStyles.input}
            name="username"
            id="username"
            type="text"
            placeholder="loadingbob1329"
            value={data.username}
            onChange={(e) => {
              setData((prev) => ({ ...prev, username: e.target.value }));
            }}
            required
          />
          <label className={registerStyles.label} htmlFor="password">
            Password
          </label>
          <input
            className={registerStyles.input}
            name="password"
            id="password"
            type="password"
            placeholder="Enter password"
            value={data.password}
            onChange={(e) => {
              setData((prev) => ({ ...prev, password: e.target.value }));
            }}
            required
          />
          <button className={registerStyles.submitButton} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
