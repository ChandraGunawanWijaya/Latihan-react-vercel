import React from "react";

const Home = React.lazy(() => import("./Hello"));
const product = React.lazy(() => import("./Product"));
const Register = React.lazy(() => import("./Registrasi"));

const routes = [
    {path : "/" , Component : Home},
    {path : "/Product" , Component : product},
    {path : "/Registrasi" , Component : Register},
];

export default routes;
