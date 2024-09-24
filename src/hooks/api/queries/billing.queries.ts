import api from '@config/axios'
import { useQuery, } from '@tanstack/react-query'
import { TGeneralRes, TInvoice, TPagination } from '@type/global.types'


export type TInvoicesRes = TGeneralRes & {
	data: {
		docs: TInvoice[];
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


export const useQInvoices = (params?: TQueryParams) => {
	const query = useQuery({
		queryKey: ['transactions-invoices-all'],
		queryFn: () => {
			return api.get<TInvoicesRes>('/transactions/invoices', { params })
		}
	})
	return {
		...query,
		result: query.data?.data.data.docs
	}
}