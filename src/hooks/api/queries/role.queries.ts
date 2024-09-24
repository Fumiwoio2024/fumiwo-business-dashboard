import api from "@config/axios";
import { useQuery } from "@tanstack/react-query";
import { TGeneralRes, TPagination, TRole } from "@type/global.types";

export type TRoleRes = TGeneralRes & {
	data: {
		docs: TRole[];
		pagination: TPagination;
	}
};

type TQueryParams = {
	page?: number; // Optional, defaults to 1
	limit?: number; // Optional, defaults to 20
	name?: string; // Optional, filter by name
	role?: string; // Optional, filter by role
	status?: "active" | "inactive" | "suspended" | "pending" | "locked"; // Optional, must be one of the defined statuses
	startDate?: string; // Optional, filter by date created (ISO 8601 format)
	endDate?: string; // Optional, filter by date created (ISO 8601 format)
}

export const useQRoles = (params?: TQueryParams) => {
	const query = useQuery({
		queryKey: ['roles-all', JSON.stringify(params)],
		queryFn: () => {
			return api.get<TRoleRes>('/roles', { params: { ...params, roleType: 'business' } })
		}
	})


	return {
		...query,
		result: query.data?.data.data.docs
	}
}