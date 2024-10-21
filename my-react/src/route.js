import React from "react";

const Home = React.lazy(() => import("./Hello"));
const product = React.lazy(() => import("./Product"));
const register = React.lazy(() => import("./Registrasi"));

const routes = [
    {path : "/" , Component : Home},
    {path : "/Product" , Component : product},
    {path : "/Registrasi" , Component : register},
];

export default routes;
