import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const handleGenericError = (error: unknown) => {
	if (error instanceof AxiosError) {
		toast.error(error.response?.data?.message);
	}
}