export const formatCardNumber = (value: string) => {
	// Remove all non-digit characters
	const cleanedValue = value.replace(/\D/g, "");

	// Group digits in sets of 4
	const groups = cleanedValue.match(/.{1,4}/g);

	// Join groups with a space
	if (groups) {
		return groups.join(" ");
	}

	return cleanedValue;
};