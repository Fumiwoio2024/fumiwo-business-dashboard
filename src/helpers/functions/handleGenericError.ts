import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const handleGenericError = (error: Error) => {
	if (error instanceof AxiosError) {
		toast.error(error.response?.data?.message);
	}
}