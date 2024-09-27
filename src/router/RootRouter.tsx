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
import OnboardingLayout from "@components/layouts/OnboardingLayout";
import BusinessDetails from "@app-screens/settings/onboarding/BusinessDetails";
import ContactDetails from "@app-screens/settings/onboarding/ContactDetails";
import SelectProduct from "@app-screens/settings/onboarding/SelectProduct";
import BillingHome from "@app-screens/billing/BillingHome";
import ClientHome from "@app-screens/clients/ClientHome";
import TeamHome from "@app-screens/teams/TeamHome";
import Profile from "@app-screens/settings/Profile";
import Business from "@app-screens/settings/Business";
import Security from "@app-screens/settings/Security";
import KeysWebhooks from "@app-screens/settings/KeysWebhooks";
import Rules from "@app-screens/settings/Rules";
// import RoleManagement from "@app-screens/teams/RoleManagement";
import SingleClient from "@app-screens/clients/SingleClient";
import ApplicationSession from "@app-screens/clients/ApplicationSession";
import AuditLogs from "@app-screens/reports/AuditLogs";
import NewRoleManagement from "@app-screens/teams/NewRoleManagement";

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
        path: "billing",
        children: [
          {
            index: true,
            element: <BillingHome />,
          },
        ],
      },
      {
        path: "teams",
        children: [
          {
            index: true,
            element: <TeamHome />,
          },
          {
            path: "manage-roles",
            element: <NewRoleManagement />,
          },
        ],
      },
      {
        path: "clients",
        children: [
          {
            index: true,
            element: <ClientHome />,
          },
          {
            path: ":clientId",
            children: [
              {
                index: true,
                element: <SingleClient />,
              },
              {
                path: ":sessionId",
                element: <ApplicationSession />,
              },
            ],
          },
        ],
      },
      {
        path: "reports",
        children: [
          {
            index: true,
            element: <AuditLogs />,
          },
        ],
      },
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "business",
            element: <Business />,
          },
          {
            path: "security",
            element: <Security />,
          },
          {
            path: "keys-webhooks",
            element: <KeysWebhooks />,
          },
          {
            path: "rules",
            element: <Rules />,
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