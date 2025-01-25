import React from "react";

const LazyHome = React.lazy(() => import("../pages/landing-page/landing-page"));
const LazyAbout = React.lazy(() => import("../pages/about/about-page"));

export { LazyHome, LazyAbout };
