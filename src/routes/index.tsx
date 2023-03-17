import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Layout from "layouts/Dashboard";
import Profile from "pages/Profile";

/*
  AppRoutes object contains path strings to use across application
*/
export const AppRoutes = {
  default: "/",
};

/*
  routes object returns <Routes> components with <Route> inside it
*/
const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: AppRoutes.default,
        element: <Profile />,
      },
      {
        path: "*",
        element: <Navigate to={AppRoutes.default} />,
      },
    ],
  },
];

export const AppRouter = () => {
  const renderRoutes = useRoutes(routes);
  return renderRoutes;
};
