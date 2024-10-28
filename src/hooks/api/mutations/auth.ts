import api from "@config/axios"
import { TBusinessUser, TGeneralRes, TUser } from "@type/global.types"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { handleGenericError } from "@helpers/functions/handleGenericError"


type TSignInReq = {
	email: string,
	password: string
	userType: string
}



type TSignInRes = TGeneralRes & {
	data: {
		token: string,
		expires: number,
		user: TBusinessUser | TUser
	},
}


type TResetNewPasswordReq = {
	token: string,
	password: string
	userType: string
	confirmPassword: string
}

type TChangeNewPasswordReq = {
	currentPassword: string,
	newPassword: string,
}


export const useMSignIn = () => {
	const navigate = useNavigate();
	const mutation = useMutation({
		mutationFn: (req: TSignInReq) => {
			return api.post<TSignInRes>('/auth/signin', req, {

			})
		},
		onSuccess: (data) => {
			// if for some reason the token isn't sent
			if (!data.data.data.token) {
				toast.error("An error occurred during sign up, please try again");
				return;
			}

			localStorage.setItem("fmw_business_auth_token", data.data.data.token);
			localStorage.setItem(
				"fmw_business_user",
				JSON.stringify(data.data.data.user),
			);
			api.defaults.headers.common["Authorization"] =
				`Bearer ${data.data.data.token}`;

			if (
				data.data?.data.user &&
				"isDefaultPassword" in data.data.data.user &&
				data.data?.data.user.isDefaultPassword === true
			) {
				// Handled in the login form
			} else if (data.data?.data.user.status === "incomplete_profile") {
				navigate("/dashboard/settings/onboarding/business-details", {
					replace: true,
				});
			} else {
				navigate("/dashboard/overview", { replace: true });
			}
		},
		onError: (error) => handleGenericError(error),

	})

	return mutation
}

// request to reset password with email and receive an otp
export const useMForgotPassword = () => {
	const mutation = useMutation({
		mutationFn: (req: {
			email: string,
			userType: string
		}) =>
			api.post('/auth/forgot-password', req)
	})

	return mutation
}

// goes to otp
export const useVerifyOtp = () => {
	const mutation = useMutation({
		mutationFn: (otpCode: string) => {
			return api.get<TSignInRes>(`/auth/reset-token/${otpCode}/verify`, {
				params: {
					userType: 'business'
				}
			})
		},
	})

	return mutation
}

// Set Password:reset password flow
export const useMResetNewPassword = () => {
	const mutation = useMutation({
		mutationFn: (req: TResetNewPasswordReq) => {
			const { token, ...rest } = req
			return api.post<TSignInRes>(`/auth/reset-token/${token}/reset-password`, rest)
		},
	})
	return mutation
}


// Set Password:login flow
export const useMChangePassword = () => {
	const token = localStorage.getItem('fmw_business_auth_token')
	const mutation = useMutation({
		mutationFn: (req: TChangeNewPasswordReq) => {
			return api.put<TSignInRes>(`/businesses/change-password`, req, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
		},
	})

	return mutation
}


