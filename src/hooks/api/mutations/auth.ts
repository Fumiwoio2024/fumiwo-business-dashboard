import api from "@/config/axios"
import { TGeneralRes, TUser } from "@type/global.types"
import { useMutation } from "@tanstack/react-query"


type TSignInReq = {
	email: string,
	password: string
	userType: string
}



type TSignInRes = TGeneralRes & {
	data: {
		token: string,
		expires: number,
		user: TUser
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
	const mutation = useMutation({
		mutationFn: (req: TSignInReq) => {
			return api.post<TSignInRes>('/auth/signin', req)
		},
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