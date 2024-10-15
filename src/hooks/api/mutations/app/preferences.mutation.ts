import api from "@config/axios";
import { handleGenericError } from "@helpers/functions/handleGenericError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

type NotificationType = 'all' | 'none' | 'emails' | 'webhooks';

type Operator = 'gt' | 'lt' | 'gte' | 'lte' | 'eq' | 'within';

type Condition = {
	threshold: number; // Range: 0-1000
	operator: Operator;
	upperThreshold?: number; // Required if operator is "within", Range: 0-1000
};

type RuleGroup = {
	reviewCondition: Condition;
	acceptCondition: Condition;
	rejectCondition: Condition;
};

type RecommendationRule = {
	ruleId?: string; // Optional, for updating a specific rule
	name: string;
	group: RuleGroup;
};

type TUpdatePreferencesReq = {
	allowedNotification?: NotificationType; // Optional
	webhookUrl?: string; // Optional, production URL
	testWebhookUrl?: string; // Optional, sandbox URL
	recommendationRules?: RecommendationRule[]; // Optional, array of rules
};


export const useMUpdatePreferences = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: async (req: TUpdatePreferencesReq) => {
			const res = await api.put(`/businesses/preferences`, req);
			return res;
		},
		onSuccess: (res) => {
			queryClient.invalidateQueries({ queryKey: ['profile-business'] })
			queryClient.invalidateQueries({ queryKey: ['profile-me'] })
			toast.success(res.data.message);
		},
		onError: (err) => {
			handleGenericError(err)
		}
	});

	return mutation
}