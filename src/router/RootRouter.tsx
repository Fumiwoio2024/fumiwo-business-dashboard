import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import AuthLayout from "@layouts/AuthLayout";
import Login from "@auth-screens/Login";
import ForgotPassword from "@auth-screens/ForgotPassword";
import Otp from "@auth-screens/Verify.tsx";
import AppLayout from "@components/layouts/AppLayout";
import Overview from "@app-screens/Overview";

import SettingsLayout from "@components/layouts/SettingsLayout";
import Settings from "@app-screens/settings/Settings";
import OnboardingLayout from "@components/layouts/OnboardingLayout";
import BusinessDetails from "@app-screens/settings/onboarding/BusinessDetails";
import ContactDetails from "@app-screens/settings/onboarding/ContactDetails";
import SelectProduct from "@app-screens/settings/onboarding/SelectProduct";
import SaveCard from "@app-screens/settings/onboarding/SaveCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/verify",
        element: <Otp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          {
            index: true,
            element: <Settings />,
          },
          {
            path: "save-card",
            element: <SaveCard />,
          },
          {
            path: "onboarding",
            element: <OnboardingLayout />,
            children: [
              {
                path: "contact-details",
                element: <ContactDetails />,
              },
              {
                path: "business-details",
                element: <BusinessDetails />,
              },
              {
                path: "select-product",
                element: <SelectProduct />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const RootRouter = () => <RouterProvider router={router} />;

export default RootRouter;