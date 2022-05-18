import React from "react";

const UserList = React.lazy(
  () => import("../components/adminPanel/Users/UserList")
);

const adminRoutes = [
  { path: "/admin/users", exact: true, name: "Слухачі", component: UserList },
];
export default adminRoutes;
