import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Contact from "./routes/contact";
import Resume from "./routes/resume";
import Projects from "./routes/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resume",
    element: <Resume />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
