import axios from "axios"
import { toast } from "react-toastify"

const API_BASE_URL = 'https://api.fumiwo.io/v1/'

const api = axios.create({
	baseURL: API_BASE_URL,
	validateStatus: (status: number) =>
		[200, 201, 202].includes(status),
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
})

api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("fmw_business_auth_token")
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error) => Promise.reject(error),
)

api.interceptors.response.use(
	(response) => {
		if (response.data?.status === "error") {
			return Promise.reject(response.data)
		}
		return response
	},
	(error) => {
		if (error.response?.status === 401) {
			localStorage.clear()
			toast.error("Session expired, please login again")
			window.location.href = "/"
		}

		return Promise.reject(error)
	},
)

export default api

