import React from "react";
const UserList = React.lazy(() => import("./users/List"));
const UserDetail = React.lazy(() => import("./users/Detail"));
const UserUpdate = React.lazy(() => import("./users/Update"));
const UserCreate = React.lazy(() => import("./users/Create"));

const routes = [
  {path: "/", Component: UserList},
  {path: "/users/show/:id", Component: UserDetail},
  {path: "/users/update/:id", Component: UserUpdate},
  {path: "/users/create", Component: UserCreate},
];
export default routes;