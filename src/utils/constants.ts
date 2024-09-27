import { TUser } from "@type/global.types";

export const scoreRecommendations = [
	{
		label: "Very Poor",
		id: "vPoor",
		color: "#E70033",
	},
	{
		label: "Poor",
		id: "poor",
		color: "#FF7643",
	},
	{
		label: "Fair",
		id: "fair",
		color: "#F6F002",
	},
	{
		label: "Good",
		id: "good",
		color: "#7ED957",
	},
	{
		label: "Excellent",
		id: "excellent",
		color: "#2B8F3C",
	},
];


export const getUser = (): TUser | undefined => JSON.parse(
	localStorage.getItem("fmw_business_user") || "",
);