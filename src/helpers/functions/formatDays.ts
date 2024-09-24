

export const formatDays = (days: number) => {
	// Dynamically change the display based on the difference
	if (days < 30) {
		// Display in days if the difference is less than 30 days
		return `${days} days`;
	} else if (days > 30 && days < 365) {
		// Display in months if the difference is less than 365 days
		return `${Math.floor(days / 30)} months`;
	} else if (days > 365) {
		// Display in months if the difference is less than 365 days
		return `${Math.floor(days / 365)} years`;
	}
	return String(days)
}

