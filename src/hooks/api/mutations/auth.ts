import api from "@/config/axios"
import { TUser } from "@type/global.types"
import { useMutation } from "@tanstack/react-query"
type GeneralRes = {
	success: boolean;
	statusCode: number;
	message: string;
	links: string[];

}


type TSignInReq = {
	email: string,
	password: string
	userType: string
}



type TSignInRes = GeneralRes & {
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
		mutationFn: (token: string) => {
			return api.post<TSignInRes>(`/auth/reset-token/${token}/verify`)
		},
	})

	return mutation
}

// for reset password screen
export const useMResetNewPassword = () => {
	const mutation = useMutation({
		mutationFn: (req: TResetNewPasswordReq) => {
			const { token, ...rest } = req
			return api.post<TSignInRes>(`/auth/reset-token/${token}/reset-password`, rest)
		},
	})

	return mutation
}