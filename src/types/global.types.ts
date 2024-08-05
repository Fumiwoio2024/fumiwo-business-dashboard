
export type TMfa = {
	isMandated: boolean | null;
	enabled: boolean;
	hasAuthenticatedWithPassword: boolean;
	secret: string | null;
};

type TRole = {
	isCustom: boolean;
	isAdminRole: boolean;
	permissions: string[];
	_id: string;
	description: string;
	name: string;
	slug: string;
	businessId: string;
	_createdAt: string;
	_lastModifiedAt: string;
	id: string
}

type TAddressInfo = {
	_id: string;
	address: string;
	city: string;
	state: string;
	country: string;
	dateAdded: string;
	lastModifiedAt: string
}

type TPhone = {
	countryCode: string;
	mobile: string;
}

type TContactPersonInfo = {
	phone: TPhone
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	role: string;
	dateAdded: string;
	lastModifiedAt: string
};

type TBusiness = {
	_id: string;
	email: string;
	name: string;
	type: string;
	addressInfo: TAddressInfo;
	contactPersonInfo: TContactPersonInfo;
	role: TRole;
	_createdAt: string;
	_lastModifiedAt: string;
	businessId: string;
	userType: string;
	id: string;
}

export type TUser = {
	mfa: TMfa;
	isDefaultPasswordUsed: boolean;
	passwordChangedAt: string | null;
	resetPasswordToken: string | null;
	passwordHistory?: string[];
	hasAcceptedInvite: boolean;
	inviteCode: string;
	status: string;
	verificationStatus: string;
	canAccessSDK: boolean;
	loginTimes: string[];
	loginAttempts: number;
	privateKey: string;
	publicKey: string;
	testPrivateKey: string;
	testPublicKey: string;
	expectedChecksPerMonth: number;
	email: string;
	firstName: string;
	lastName: string,
	type: string;
	registrationNumber: string;
	addressInfo: TAddressInfo;
	contactPersonInfo: TContactPersonInfo;
	isDefaultPassword: boolean;
	createdBy: string;
	preferences: {
		notifications: {
			allowed: string
		};
		webhookUrl: string | null;
		testWebhookUrl: string | null;
		_id: string;
		recommendationRules: {
			group: {
				reviewCondition: {
					upperThreshold: number;
					recommendation: string;
					threshold: number;
					operator: string
				};
				acceptCondition: {
					upperThreshold: number;
					recommendation: string;
					threshold: number;
					operator: string
				};
				rejectCondition: {
					upperThreshold: number;
					recommendation: string;
					threshold: number;
					operator: string
				}
			};
			_id: string;
			name: string;
			slug: string;
			dateAdded: string;
			lastModifiedAt: string
		}[];
		dateAdded: string;
		lastModifiedAt: string
	};
	role: TRole
	dateAdded: string;
	lastModifiedAt: string;
	_createdAt: string;
	createdAt: string;
	_lastModifiedAt: string;
	businessId: string;
	business?: TBusiness;
	userType: string;
	id: string
}

export type TGeneralRes = {
	success: boolean;
	statusCode: number;
	message: string;
	links: string[];

}

type ProductBilled = {
	fixedFee: number;
	_id: string;
	apiCallsMade: number;
	type: string;
	apiCallsAllowed: number;
	feeType: string;
	currency: string;
	variableFees: number[]; // Adjust type if there is more information about variableFees
}

export type Invoice = {
	cardCharged: string;
	transactionId: string;
	amountPaid: number;
	status: string;
	dateDue: string; // Could be Date if parsing is needed
	datePaid: string; // Could be Date if parsing is needed
	paymentLink: string;
	pdfDownloadLink: string;
	discount: number;
	discountReason: string | null;
	additionalCost: number;
	additionalCostReason: string | null;
	business: string;
	plan: string;
	productsBilled: ProductBilled[];
	currency: string;
	amountDue: number;
	type: string;
	createdAt: string; // Could be Date if parsing is needed
	lastModifiedAt: string; // Could be Date if parsing is needed
	_createdAt: string; // Could be Date if parsing is needed
	_lastModifiedAt: string; // Could be Date if parsing is needed
	id: string;
}
