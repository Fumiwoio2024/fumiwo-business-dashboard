import api from "@config/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useMCreateRole = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (user: Record<string, string | string[]>) => {
			const res = await api.post(`/roles`, { roleType: 'business', ...user });
			return res;
		},
		onSuccess: (res) => {
			queryClient.invalidateQueries({ queryKey: ['roles-all'] })

			toast.success(res.data.message);
		},
	});

	return mutation;
};