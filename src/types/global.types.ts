export type TUser = {
	mfa: {
		enabled: boolean,
		hasAuthenticatedWithPassword: boolean,
		secret: string | null
	},
	isDefaultPasswordUsed: boolean,
	passwordChangedAt: string | null,
	resetPasswordToken: string | null,
	status: string,
	verificationStatus: string,
	canAccessSDK: boolean,
	loginTimes: string[],
	loginAttempts: number,
	privateKey: string,
	publicKey: string,
	testPrivateKey: string,
	testPublicKey: string,
	expectedChecksPerMonth: number,
	email: string,
	name: string,
	type: string,
	registrationNumber: string,
	addressInfo: {
		_id: string,
		address: string,
		city: string,
		state: string,
		country: string,
		dateAdded: string,
		lastModifiedAt: string
	},
	contactPersonInfo: {
		phone: {
			countryCode: string,
			mobile: string
		},
		_id: string,
		firstName: string,
		lastName: string,
		email: string,
		role: string,
		dateAdded: string,
		lastModifiedAt: string
	},
	isDefaultPassword: boolean,
	createdBy: string,
	preferences: {
		notifications: {
			allowed: string
		},
		webhookUrl: string | null,
		testWebhookUrl: string | null,
		_id: string,
		recommendationRules: {
			group: {
				reviewCondition: {
					upperThreshold: number,
					recommendation: string,
					threshold: number,
					operator: string
				},
				acceptCondition: {
					upperThreshold: number,
					recommendation: string,
					threshold: number,
					operator: string
				},
				rejectCondition: {
					upperThreshold: number,
					recommendation: string,
					threshold: number,
					operator: string
				}
			},
			_id: string,
			name: string,
			slug: string,
			dateAdded: string,
			lastModifiedAt: string
		}[],
		dateAdded: string,
		lastModifiedAt: string
	},
	role: {
		isCustom: boolean,
		isAdminRole: boolean,
		permissions: string[],
		_id: string,
		description: string,
		name: string,
		slug: string,
		businessId: string,
		_createdAt: string,
		_lastModifiedAt: string,
		id: string
	},
	dateAdded: string,
	lastModifiedAt: string,
	_createdAt: string,
	_lastModifiedAt: string,
	businessId: string,
	userType: string,
	id: string
}