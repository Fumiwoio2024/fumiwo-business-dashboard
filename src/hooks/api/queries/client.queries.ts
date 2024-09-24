import api from '@config/axios'
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
	page?: number; // Optional, defaults to 1
	limit?: number; // Optional, defaults to 20
	name?: string; // Optional, filter by name
	email?: string; // Optional, filter by email
	startDate?: string; // Optional, filter by date created (ISO 8601 format)
	endDate?: string; // Optional, filter by date created (ISO 8601 format)
	entityId?: string; // Optional, filter by entity id
}


export const useQClients = (params: TQueryParams) => {
	const query = useQuery({
		queryKey: ['clients-all'],
		queryFn: () => {
			return api.get<TAllClientsRes>('/clients', { params })
		}
	})
	return {
		...query,
		result: query.data?.data.data.docs
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