import React from "react";

const LazyHome = React.lazy(()=>import('../pages/landing-page'));
const LazyAbout = React.lazy(()=>import('../pages/about/about'));

export {
    LazyHome,
    LazyAbout
}