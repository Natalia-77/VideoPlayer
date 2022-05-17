import React from "react";

const HomePage = React.lazy(() => import("../components/home"));
const Register = React.lazy(
  () => import("../components/account/register/index")
);
const Login = React.lazy(() => import("../components/account/login/index"));

const defaultRoutes = [
  { path: "/", exact: true, name: "Головна", component: HomePage },
  { path: "/register", exact: true, name: "Реєстрація", component: Register },
  { path: "/login", exact: true, name: "Вхід", component: Login },
];
export default defaultRoutes;
