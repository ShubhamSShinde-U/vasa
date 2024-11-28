// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout";
import HomePage from "./components/home-page/home-page";
import LandingPage from "./pages/landing-page";
import About from "./pages/about/about";

// Define your routes array
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <LandingPage /> },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
];

// Create a router using createBrowserRouter
const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
