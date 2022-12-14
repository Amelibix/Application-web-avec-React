import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Accueilpage from "./pages/Accueil/Accueil";
import Propos from "./pages/A-propos/A-propos";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueilpage />,
      },
      {
        path: "/a-propos",
        element: <Propos />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);
