import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AllBook from "../Pages/AllBook/AllBook";
import CategoryBook from "../components/CategoryBook/CategoryBook";
import CategoryDetails from "../components/CategoryDetails/CategoryDetails";
import PDF from "../components/PDF/PDF";
import Update from "../components/Update/Update";
import BorrowBook from "../Pages/BorrowBook/BorrowBook";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-book",
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>,
      },
      {
        path: "/all-book",
        element: <PrivateRoute><AllBook></AllBook></PrivateRoute>,
      },
      {
        path: "/category/:categoryName",
        element: <PrivateRoute><CategoryBook></CategoryBook></PrivateRoute>,
      },
      {
        path: "/categoryDetails/:id",
        element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
      },
      {
        path: "/borrowed-book",
        element: <PrivateRoute><BorrowBook></BorrowBook></PrivateRoute>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: '/update-book/:id',
        element: <Update />,
        loader: ({params})=> fetch(`https://book-minder-library-server.vercel.app/api/v1/books/${params.id}`)
      }
    ],
  },
  {
    path: "/book/pdf",
    element: <PDF></PDF>,
  },
]);
export default Router;
