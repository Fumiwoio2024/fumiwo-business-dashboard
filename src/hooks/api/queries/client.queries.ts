import api from '@/config/axios'
import { useQuery, } from '@tanstack/react-query'
import { TDoc, TGeneralRes, TPagination } from '@type/global.types'


export type TClient = TGeneralRes & {
	docs: TDoc[];
	pagination: TPagination;
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
			return api.get<TClient>('/clients', {
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
		result: query.data?.data.docs
	}
}