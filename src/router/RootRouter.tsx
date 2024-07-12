import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import AuthLayout from "@layouts/AuthLayout";
import Login from "@auth-screens/Login";
import ForgotPassword from "@auth-screens/ForgotPassword";
import Otp from "@auth-screens/Verify.tsx";
import Dashboard from "@app-screens/Dashboard";

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
		path: "/dashboard",
		element: <Dashboard />,
	}
]);

const RootRouter = () => <RouterProvider router={router} />;

export default RootRouter;