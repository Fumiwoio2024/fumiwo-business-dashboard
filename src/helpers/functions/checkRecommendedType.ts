export const checkRecommendType = (
	recommendation: string,
	ReviewResult: string,
	rejectedResult: string,
	acceptResult: string,
) => {
	if (recommendation === "review") {
		return ReviewResult;
	} else if (recommendation === "reject") {
		return rejectedResult;
	} else if (recommendation === "accept") {
		return acceptResult;
	}
};