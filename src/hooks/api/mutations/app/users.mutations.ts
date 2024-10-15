import api from "@config/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useMDeleteUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await api.delete(`/businesses/users/${id}`);
      toast.success(res.data.message);
      return res;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['profile-business'] })
      queryClient.invalidateQueries({ queryKey: ['profile-me'] })
      queryClient.invalidateQueries({ queryKey: ['users-all'] })
      toast.success(res.data.message);
    },
  });

  return mutation;
};
export const useMInviteUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (user: { email: string; role: string }) => {
      const res = await api.post(`/businesses/users`, user);
      toast.success(res.data.message);
      return res;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['profile-business'] })
      queryClient.invalidateQueries({ queryKey: ['profile-me'] })
      queryClient.invalidateQueries({ queryKey: ['users-all'] })
      toast.success(res.data.message);

      toast.success(res.data.message);
    },
  });

  return mutation;
};
