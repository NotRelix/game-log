import Home from "./Home/Home";
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
];

export default routes;
