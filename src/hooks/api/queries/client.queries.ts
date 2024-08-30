import api from '@/config/axios'
import { useQuery, } from '@tanstack/react-query'
import { TClient, TGeneralRes, TPagination } from '@type/global.types'


export type TClientRes = TGeneralRes & {
	data: {
		docs: TClient[];
		pagination: TPagination;
	}
};


export const useQClients = ({
	pageNumber,
	pageSize,
	search
}: {
	pageNumber?: number;
	pageSize?: number;
	search?: string;
}) => {
	const query = useQuery({
		queryKey: ['clients'],
		queryFn: () => {
			return api.get<TClientRes>('/clients', {
				params: {
					pageNumber,
					pageSize,
					search
				}

			})
		}
	})
	return {
		...query,
		result: query.data?.data.data.docs
	}
}