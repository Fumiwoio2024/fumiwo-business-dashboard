import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import AuthLayout from "@layouts/AuthLayout";
import Login from "@auth-screens/Login";
import ForgotPassword from "@auth-screens/ForgotPassword";
import Otp from "@auth-screens/Verify.tsx";
import Dashboard from "@app-screens/Dashboard";
import SettingsLayout from "@components/layouts/SettingsLayout";
import Settings from "@app-screens/Settings";
import AppLayout from "@components/layouts/AppLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <Login />
			},
			{
				path: "/login",
				element: <Login />
			},
			{
				path: "/forgot-password",
				element: <ForgotPassword />
			},
			{
				path: "/verify",
				element: <Otp />
			}
		]
	},
	{
		path: "dashboard",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />
			},
			{
				path: "overview",
				element: <Dashboard />
			},
			{
				path: "settings",
				element: <SettingsLayout />,
				children: [
					{
						index: true,
						element: <Settings />
					}
				]
			}
		]
	}
]);

const RootRouter = () => <RouterProvider router={router} />;

export default RootRouter;