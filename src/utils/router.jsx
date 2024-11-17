import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";

import AllTreatments from "../components/AllTreatments";
import Profile from "../components/Profile";
import MyAppointments from "../components/MyAppointments";
import Details from "../components/Details";
import Login from "../components/Login";
import Registration from "../components/Registration";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json();

          const feedBackRes = await fetch("/happyclients.json");
          const feedBackData = await feedBackRes.json();

          return { servicesData, feedBackData };
        },
      },
      {
        path: "/allTreatments",
        element: <AllTreatments />,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/myAppointments",
        element: <MyAppointments />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute>
          <Details />
        </PrivateRoute>,
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();

          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path:'/register',
        element: <Registration />
      },
    ],
  },
]);

export default router;
