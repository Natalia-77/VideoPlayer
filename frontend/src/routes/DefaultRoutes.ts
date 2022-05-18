import React from "react";

const HomePage = React.lazy(() => import("../components/home"));
const Register = React.lazy(
  () => import("../components/account/register/index")
);
const Login = React.lazy(() => import("../components/account/login"));
const VideosList = React.lazy(() => import("../components/videos/VideosList"));

const defaultRoutes = [
  { path: "/", exact: true, name: "Головна", component: HomePage },
  { path: "/register", exact: true, name: "Реєстрація", component: Register },
  { path: "/login", exact: true, name: "Вхід", component: Login },
  { path: "/video/list", exact:true, name:"Список відео", component:VideosList}
];
export default defaultRoutes;
