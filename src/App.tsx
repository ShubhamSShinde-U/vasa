// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/route";


// Define your routes array
// const routes = [
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "home", element: <LandingPage /> },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path:'services/:id',
//         element:<DetailedService />
//       },
//       {
//         path: "*",
//         element: <Navigate to={'home'}/>,
//       },
//     ],
//   },
// ];

// Create a router using createBrowserRouter
const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
