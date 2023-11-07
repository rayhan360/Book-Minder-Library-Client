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
        element: <AddBook></AddBook>,
      },
      {
        path: "/all-book",
        element: <AllBook></AllBook>,
      },
      {
        path: "/category/:categoryName",
        element: <CategoryBook></CategoryBook>,
      },
      {
        path: "/categoryDetails/:id",
        element: <CategoryDetails></CategoryDetails>,
      },
      {
        path: "/borrowed-book",
        element: <BorrowBook></BorrowBook>
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
        loader: ({params})=> fetch(`http://localhost:3000/api/v1/books/${params.id}`)
      }
    ],
  },
  {
    path: "/book/pdf",
    element: <PDF></PDF>,
  },
]);
export default Router;
