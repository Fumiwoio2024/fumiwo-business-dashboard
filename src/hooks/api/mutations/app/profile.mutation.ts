import api from "@config/axios";
import { handleGenericError } from "@helpers/functions/handleGenericError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TGeneralRes, TUser } from "@type/global.types";
import { toast } from "react-toastify";

type TUpdateProfileReq = {
	firstName?: string;
	lastName?: string;
	middleName?: string;
	gender?: string;
	dateOfBirth?: string;
	photo?: string;
	mobile?: string;
	countryCode?: string;
	phone?: string;
};

type TUpdateProfileRes = TGeneralRes & {
	data: TUser;
}


export const useMUpdateProfile = () => {
	const mutation = useMutation({
		mutationFn: async (user: TUpdateProfileReq) => {
			const res = await api.post<TUpdateProfileRes>(`/users/me`, user);
			return res;
		},
		onSuccess: (res) => {
			toast.success(res.data.message);
		},
		onError: (err) => {
			handleGenericError(err)
		}
	});

	return mutation;
};


export const useMToggleMfa = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (req: {
			"email": string,
			"token": string,
			"enabled": boolean
		}) => {
			const { enabled, ...request } = { ...req, userType: "business" };
			const res =
				enabled
					? await api.post<TUpdateProfileRes>(`/auth/mfa/disable`, request)
					: await api.post<TUpdateProfileRes>(`/auth/mfa/enable`, request)

			return res;
		},
		onSuccess: (res) => {
			queryClient.invalidateQueries({ queryKey: ['profile-business'] })
			queryClient.invalidateQueries({ queryKey: ['profile-me'] })
			toast.success(res.data.message);
		},
		onError: (err) => {
			handleGenericError(err)
		}
	});

	return mutation
}

export const useMRotateKeys = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: async () => {
			const res = await api.post(`/businesses/preferences/rotate-keys`,)
			return res;
		},
		onSuccess: (res) => {
			queryClient.invalidateQueries({ queryKey: ['profile-business'] })
			queryClient.invalidateQueries({ queryKey: ['profile-me'] })
			toast.success(res.data.message);
		},
		onError: (err) => {
			handleGenericError(err)
		}
	});

	return mutation
}


export const useMSwitchDataDisplay = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: async (req: { dataType: "sandbox" | "production" }) => {
			const res = await api.post(`/businesses/preferences/switch-data-display`, req)
			return res;
		},
		onSuccess: (res) => {
			queryClient.invalidateQueries()
			toast.success(res.data.message);
		},
		onError: (err) => {
			handleGenericError(err)
		}
	});

	return mutation
}