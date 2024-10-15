import { TBusinessUser, TUser } from "@type/global.types";

export const scoreRecommendations = [
	{
		label: "Very Poor",
		id: "vPoor",
		color: "#E70033",
		lowerLimit: 200,
		upperLimit: 320,
	},
	{
		label: "Poor",
		id: "poor",
		color: "#FF7643",
		lowerLimit: 320,
		upperLimit: 440,
	},
	{
		label: "Fair",
		id: "fair",
		color: "#F6F002",
		lowerLimit: 440,
		upperLimit: 560,
	},
	{
		label: "Good",
		id: "good",
		color: "#7ED957",
		lowerLimit: 560,
		upperLimit: 680,
	},
	{
		label: "Excellent",
		id: "excellent",
		color: "#2B8F3C",
		lowerLimit: 680,
		upperLimit: 720,
	},
];


export const getUser = (): TUser | TBusinessUser | undefined => JSON.parse(
	localStorage.getItem("fmw_business_user") || "{}",
);