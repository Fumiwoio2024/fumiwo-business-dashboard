export const formatPhoneNumber = (value: string) => {
	// Remove non-digit characters
	const cleanedValue = value.replace(/\D/g, '');

	// Format the number into groups of three and four
	const match = cleanedValue.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
	if (match) {
		const [, group1, group2, group3] = match;
		return `${group1}${group2 ? ` ${group2}` : ''}${group3 ? ` ${group3}` : ''}`;
	}

	return cleanedValue;
};