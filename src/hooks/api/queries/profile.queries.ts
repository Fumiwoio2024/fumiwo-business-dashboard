import api from "@config/axios";
import { useQuery } from "@tanstack/react-query";
import { TGeneralRes, TUser } from "@type/global.types";
import { getUser } from "@utils/constants";



type TProfileRes = TGeneralRes & {
	data: TUser
}


export const useQProfile = () => {
	const user = getUser()

	const query = useQuery({
		queryKey: ['profile-me'],
		queryFn: async () => {
			const res = await api.get<TProfileRes>('/users/me')
			return res.data.data
		},
		initialData: user
	})

	return {
		...query,
		result: query.data
	}
};