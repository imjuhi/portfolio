import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/layout";
import FrontPage from "./routes/frontpage/frontpage";
import ProjectPage from "./routes/project/project";
import ContactPage from "./routes/contact/contact";
import AboutPage from "./routes/about/about";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <FrontPage />,
        },
        {
          path: "/project",
          element: <ProjectPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
