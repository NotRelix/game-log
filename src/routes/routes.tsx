import Home from "./Home/Home";
import Login from "./Login/Login";
import Post from "./Post/Post";
import Posts from "./Posts/Posts";
import Register from "./Register/Register";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/posts",
    Component: Posts,
  },
  {
    path: "/posts/:postId",
    Component: Post,
  },
];

export default routes;
