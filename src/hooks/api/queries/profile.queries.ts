import api from "@config/axios";
import { useQuery } from "@tanstack/react-query";
import { TGeneralRes, TUser } from "@type/global.types";
// import { getUser } from "@utils/constants";



type TProfileRes = TGeneralRes & {
	data: TUser
}

type TMFASecretRes = TGeneralRes & {
	data: {
		qrCode: string;
		mfaKey: string;
	}
}


export const useQProfile = () => {
	// const user = getUser()

	const query = useQuery({
		queryKey: ['profile-me'],
		queryFn: async () => {
			const res = await api.get<TProfileRes>('/users/me', {
				headers: {
					Authorization: ''
				}
			})
			return res.data.data
		},
		// initialData: user
	})

	return {
		...query,
		result: query.data
	}
};

export const useQBusinessProfile = () => {
	// const user = getUser()

	const query = useQuery({
		queryKey: ['profile-business'],
		queryFn: async () => {
			const res = await api.get<TProfileRes>('/businesses/me')
			return res.data.data
		},
		// initialData: user
	})

	return {
		...query,
		result: query.data
	}
};


export const useQMFASecret = () => {

	const query = useQuery({
		queryKey: ['mfa-secret'],
		queryFn: async () => {
			return await api.get<TMFASecretRes>('/auth/mfa/secret', { params: { userType: "business" } })
		},
		refetchOnMount: false,
		refetchIntervalInBackground: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 60 * 24,
	})

	return {
		...query,
		result: query.data?.data.data
	}
}