import Home from "./Home/Home";
import Posts from "./Posts/Posts";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/posts",
    Component: Posts,
  },
];

export default routes;
