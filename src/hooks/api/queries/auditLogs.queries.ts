import api from '@config/axios'
import { useQuery, } from '@tanstack/react-query'
import { TAuditLog, TGeneralRes, TPagination } from '@type/global.types'

type TLogEvent = (
	"View" |
	"Export" |
	"Create" |
	"Search" |
	"Requery" |
	"Generate" |
	"Download" |
	"Deactivate" |
	"Activate" |
	"ChangeRole" |
	"AddUser" |
	"AddMultipleUsers" |
	"Manage" |
	"Login" |
	"Remove" |
	"Update" |
	"Verify" |
	"Reconcile" |
	"Request"
)
type TLogResource = (
	"Admin" |
	"User" |
	"Auction" |
	"Bid" |
	"Auth" |
	"Card" |
	"Enquiry" |
	"HomeTie" |
	"Order" |
	"Quote" |
	"Reward" |
	"Role" |
	"Saving" |
	"Plan" |
	"Property" |
	"Gift" |
	"Transaction" |
	"Wallet"
)
export type TLogResoursesRes = TGeneralRes & {
	data: {
		docs: {
			"events": TLogEvent[]
			,
			"resources": TLogResource[]
		};
		pagination: TPagination;
	}
};


type TAuditLogsRes = TGeneralRes & {
	data: {
		docs: TAuditLog[]
	}
}


type TQueryParams = {
	page?: number; // Optional, defaults to 1
	limit?: number; // Optional, defaults to 20
	name?: string; // Optional, filter by name
	email?: string; // Optional, filter by email
	startDate?: string; // Optional, filter by date created (ISO 8601 format)
	endDate?: string; // Optional, filter by date created (ISO 8601 format)
	event?: TLogEvent; // Optional, filter by event
	resource?: TLogResource; // Optional, filter by resource
	entityId?: string; // Optional, filter by entity id
}


export const useQAuditLogs = (params?: TQueryParams) => {
	const query = useQuery({
		queryKey: ['logs-audit'],
		queryFn: () => {
			return api.get<TAuditLogsRes>('/auditlogs/businesses', { params })
		}
	})
	return {
		...query,
		result: query.data?.data.data.docs
	}
}