import axios from "axios"

const API_BASE_URL = 'https://api.dev.fumiwo.io/v1/'

const api = axios.create({
	baseURL: API_BASE_URL,
	validateStatus: (status: number) =>
		[200, 201, 202].includes(status),
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
})



export default api