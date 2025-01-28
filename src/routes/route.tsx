import { Navigate } from "react-router-dom";
import Layout from "../components/layout/layout";
import { LazyAbout, LazyHome } from "./lazy-route";
import { Suspense } from "react";
import { Loader } from "../sharedCompenents/loader/loader";
import Services from "../pages/service/services-page";

const routes = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyHome />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<Loader/>}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <LazyAbout />
          </Suspense>
        ),
      },
      // {
      //   path: "services",
      //   element: (
      //     <Suspense fallback={<Loader />}>
      //       <LazyHome />
      //     </Suspense>
      //   ),
      // },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={""} />,
  },
];

export { routes };
