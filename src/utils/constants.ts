import { TBusinessUser, TUser } from "@type/global.types";

export const scoreRecommendations = [
	{
		label: "Very Poor",
		id: "vPoor",
		color: "#E70033",
		lowerLimit: 100,
		upperLimit: 250,
	},
	{
		label: "Poor",
		id: "poor",
		color: "#FF7643",
		lowerLimit: 250,
		upperLimit: 400,
	},
	{
		label: "Fair",
		id: "fair",
		color: "#F6F002",
		lowerLimit: 400,
		upperLimit: 550,
	},
	{
		label: "Good",
		id: "good",
		color: "#7ED957",
		lowerLimit: 550,
		upperLimit: 700,
	},
	{
		label: "Excellent",
		id: "excellent",
		color: "#2B8F3C",
		lowerLimit: 700,
		upperLimit: 1000,
	},
];


export const getUser = (): TUser | TBusinessUser | undefined => JSON.parse(
	localStorage.getItem("fmw_business_user") || "{}",
);