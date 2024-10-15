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

export const getRecommendedColor = (recommendation: string) => checkRecommendType(
	recommendation,
	"#FCBE2D",
	"#FF0000",
	"#0BE781",
)

export const formatRecomendationType = (recommendation: string) => checkRecommendType(
	recommendation,
	"Review",
	"Rejected",
	"Approved",
)