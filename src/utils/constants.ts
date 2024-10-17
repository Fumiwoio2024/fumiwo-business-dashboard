import { TBusinessUser, TUser } from "@type/global.types";

export const scoreRecommendations = [
	{
		label: "Very Poor",
		id: "vPoor",
		color: "#E70033",
		lowerLimit: 100,
		upperLimit: 280,
	},
	{
		label: "Poor",
		id: "poor",
		color: "#FF7643",
		lowerLimit: 280,
		upperLimit: 460,
	},
	{
		label: "Fair",
		id: "fair",
		color: "#F6F002",
		lowerLimit: 460,
		upperLimit: 640,
	},
	{
		label: "Good",
		id: "good",
		color: "#7ED957",
		lowerLimit: 640,
		upperLimit: 820,
	},
	{
		label: "Excellent",
		id: "excellent",
		color: "#2B8F3C",
		lowerLimit: 820,
		upperLimit: 1000,
	},
];


export const getUser = (): TUser | TBusinessUser | undefined => JSON.parse(
	localStorage.getItem("fmw_business_user") || "{}",
);