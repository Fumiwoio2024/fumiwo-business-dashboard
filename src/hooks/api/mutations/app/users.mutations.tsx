import api from "@config/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useMDeleteUser = () => {
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await api.delete(`/businesses/users/${id}`);
      toast.success(res.data.message);
      return res;
    },
  });

  return mutation;
};
export const useMInviteUser = () => {
  const mutation = useMutation({
    mutationFn: async (user: { email: string; role: string }) => {
      const res = await api.post(`/businesses/users`, user);
      toast.success(res.data.message);
      return res;
    },
  });

  return mutation;
};
