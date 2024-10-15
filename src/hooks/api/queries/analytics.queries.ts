import api from '@config/axios'
import { useQuery, } from '@tanstack/react-query'
import { TGeneralRes } from '@type/global.types'
import moment from 'moment';

type ChangeDirection = "none" | "up" | "down";

type TBusinessStatsRes = TGeneralRes & {
	data: {
		"totalClients": number;
		"totalPhoneData": number;
		"totalLoanData": number;
		"averageCreditScore": number;
		"highestCreditScore": number;
		"percentageChange": {
			totalClients: {
				change: number;
				direction: ChangeDirection;
			};
			totalPhoneData: {
				change: number;
				direction: ChangeDirection;
			};
			totalLoanData: {
				change: number;
				direction: ChangeDirection;
			};
		}
	}
};
type TRecommendationStatsRes = TGeneralRes & {
	data: {
		"recommendation": string;
		"percentage": string;
		"count": number;
	}[]
};

type TDigitalCreditRatingStatsRes = TGeneralRes & {
	data: {
		"timeframe": {
			"startDate": string,
			"endDate": string
		},
		creditRatingCounts: {
			"January": {
				"very_poor": number,
				"poor": number,
				"fair": number,
				"good": number,
				"excellent": number
			},
		}

	}
};
type TLoanRepaymentStatsRes = TGeneralRes & {
	data: {
		"timeFormat": "year" | "month" | "week" | "day",
		"stats": {
			"timeUnit": number,
			"clientsWithLoans": number,
			"clientsWithoutLoans": number
		}[]
	}
};

type TLoanRepaymentSettlmentStatsRes = TGeneralRes & {
	data: {
		"timeFormat": "year" | "month" | "week" | "day",
		"stats": {
			"timeUnit": number,
			"settledOnTime": number,
			"settledLessThan30DaysLate": number,
			"settledMoreThan30DaysLate": number,
			"settledMoreThan60DaysLate": number,
			"settledMoreThan90DaysLate": number
		}[]
	}
};



export const useQBusinessStats = () => {
	const query = useQuery({
		queryKey: ['analytics-business-stats'],
		queryFn: () =>
			api.get<TBusinessStatsRes>('analytics/stats')
	})
	return {
		...query,
		result: query.data?.data.data
	}
}

export const useQRecommendationStats = ({ startDate, endDate }: {
	startDate: moment.Moment;
	endDate: moment.Moment;
}) => {
	const query = useQuery({
		queryKey: ['analytics-recommendation-stats', startDate, endDate],
		queryFn: () =>
			api.get<TRecommendationStatsRes>('/analytics/digital/recommendation-stats',
				{
					params: {
						startDate: startDate.format('YYYY-MM-DD'),
						endDate: endDate.format('YYYY-MM-DD')
					}
				}
			),
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

export const useQDigitalCreditRatingStats = ({ startDate, endDate }: {
	startDate: moment.Moment;
	endDate: moment.Moment;
}) => {
	const query = useQuery({
		queryKey: ['analytics-digital-credit-rating-stats', startDate, endDate],
		queryFn: () =>
			api.get<TDigitalCreditRatingStatsRes>('/analytics/digital/credit-rating-stats',
				{
					params: {
						startDate: startDate.format('YYYY-MM-DD'),
						endDate: endDate.format('YYYY-MM-DD')
					}
				}
			)
	})
	return {
		...query,
		result: query.data?.data.data
	}
}

export const useQLoanRepaymentStats = ({ startDate, endDate }: {
	startDate: moment.Moment;
	endDate: moment.Moment;
}) => {
	const query = useQuery({
		queryKey: ['analytics-loan-repayment-stats', startDate, endDate],
		queryFn: () =>
			api.get<TLoanRepaymentStatsRes>('/analytics/loan-stats',
				{
					params: {
						startDate: startDate.format('YYYY-MM-DD'),
						endDate: endDate.format('YYYY-MM-DD')
					}
				}
			)
	})
	return {
		...query,
		result: query.data?.data.data
	}
}

export const useQLoanRepaymentSettlementStats = ({ startDate, endDate }: {
	startDate: moment.Moment;
	endDate: moment.Moment;
}) => {
	const query = useQuery({
		queryKey: ['analytics-loan-repayment-settlement-stats', startDate, endDate],
		queryFn: () =>
			api.get<TLoanRepaymentSettlmentStatsRes>('/analytics/loan-settlement-stats',
				{
					params: {
						startDate: startDate.format('YYYY-MM-DD'),
						endDate: endDate.format('YYYY-MM-DD')
					}
				}
			)
		// Promise.resolve({
		// 	data: {
		// 		data: {
		// 			"timeframe": "year",
		// 			"stats": {
		// 				"January": {
		// 					"settledOnTime": 3,
		// 					"settledLessThan30DaysLate": 1,
		// 					"settledMoreThan30DaysLate": 0,
		// 					"settledMoreThan60DaysLate": 0,
		// 					"settledMoreThan90DaysLate": 0
		// 				},
		// 				"February": {
		// 					"settledOnTime": 4,
		// 					"settledLessThan30DaysLate": 3,
		// 					"settledMoreThan30DaysLate": 1,
		// 					"settledMoreThan60DaysLate": 1,
		// 					"settledMoreThan90DaysLate": 1
		// 				},
		// 				"March": {
		// 					"settledOnTime": 5,
		// 					"settledLessThan30DaysLate": 4,
		// 					"settledMoreThan30DaysLate": 2,
		// 					"settledMoreThan60DaysLate": 2,
		// 					"settledMoreThan90DaysLate": 2
		// 				},
		// 			}
		// 		}
		// 	}
		// })
	})

	return {
		...query,
		result: query.data?.data.data
	}
}
