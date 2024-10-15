// Filter out empty values
export const filterEmptyKeys = (params: Record<string, string | number>) => Object.fromEntries(
	Object.entries(params).filter(([_, value]) => value !== '' && value !== null && value !== undefined)
);