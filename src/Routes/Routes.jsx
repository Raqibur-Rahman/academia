import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Authentication/Signin/Signin";
import SignUp from "../Pages/Authentication/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
      ,
      {
        path: "/login",
        element: <Signin></Signin>
      }
      ,
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  }
]);

