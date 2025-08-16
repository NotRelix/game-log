import { AuthLoader } from "../loaders/AuthLoader";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Post from "./Post/Post";
import Posts from "./Posts/Posts";
import Register from "./Register/Register";
import Root from "./Root/Root";

const routes = [
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
        loader: AuthLoader,
      },
      {
        path: "login",
        Component: Login,
        loader: AuthLoader,
      },
      {
        path: "posts",
        Component: Posts,
      },
      {
        path: "posts/:postId",
        Component: Post,
      },
    ],
  },
];

export default routes;
