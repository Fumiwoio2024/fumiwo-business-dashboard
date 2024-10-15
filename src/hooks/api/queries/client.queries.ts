import api from '@config/axios'
import { filterEmptyKeys } from '@helpers/functions/filterEmptyKeys';
import { useQuery, } from '@tanstack/react-query'
import { TClient, TGeneralRes, TPagination } from '@type/global.types'


export type TAllClientsRes = TGeneralRes & {
	data: {
		docs: TClient[];
		pagination: TPagination;
	}
};

export type TSingleClientRes = TGeneralRes & {
	data: TClient
};

type TQueryParams = {
	limit?: number;  // The number of clients to return (default is 20).
	page?: number;   // The page number to return (default is 1).
	externalClientId?: string;  // The external client ID to filter the clients.
	clientId?: string;  // The client ID to filter the clients.
	digitalCreditScoreEvolution?: string;  // Filter clients by the digital credit score evolution.
	businessId?: string;  // The business ID to filter the clients.
	startDate?: string;  // The start date for filtering clients (format: YYYY-MM-DD).
	endDate?: string;  // The end date for filtering clients (format: YYYY-MM-DD). Must be greater than or equal to the start date.
	dcsFrom?: number;  // Start value for filtering clients by digital credit score range.
	dcsTo?: number;  // End value for filtering clients by digital credit score range. Must be greater than or equal to the dcsFrom.
	phoneDataCountFrom?: number;  // Start value for filtering clients by phone data count range.
	phoneDataCountTo?: number;  // End value for filtering clients by phone data count range. Must be greater than or equal to the phoneDataCountFrom.
	sort?: string;  // Indicate the sort order, URL-encoded JSON string with fields "item" and "order" { item: string, order: number }.
}


export const useQClients = (params: TQueryParams) => {
	const query = useQuery({
		queryKey: ['clients-all', JSON.stringify(params)],
		queryFn: () => {
			return api.get<TAllClientsRes>('/clients', { params: filterEmptyKeys(params) })
		},
	})

	return {
		...query,
		result: query.data?.data.data.docs,
		pagination: query.data?.data.data.pagination,
	}
}

export const useQSingleClient = (clientId: string | undefined, params?: TQueryParams) => {
	const query = useQuery({
		queryKey: ['clients-single', clientId],
		queryFn: () => {
			return api.get<TSingleClientRes>(`/clients/${clientId}`, { params })
		}
	})
	return {
		...query,
		result: query.data?.data.data as TClient | undefined
	}
}