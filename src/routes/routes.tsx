import Home from "./Home/Home";
import Login from "./Login/Login";
import Posts from "./Posts/Posts";
import Register from "./Register/Register";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/posts",
    Component: Posts,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
];

export default routes;
