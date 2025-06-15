import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../compenments/Header.jsx";
import Footer from "../compenments/Footer.jsx";
import Home from "../compenments/Home.jsx";

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
