import { dummySingleClient } from "@utils/dummyClient";

export type TMfa = {
	isMandated: boolean | null;
	enabled: boolean;
	hasAuthenticatedWithPassword: boolean;
	secret: string | null;
};

export type TRole = {
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

type TPhoneNumber = {
	countryCode: string;
	mobile: string;
}

type TContactPersonInfo = {
	phone: TPhoneNumber
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
	name: string;
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



type CurrencyAmount = {
	_id: string;
	amount: number;
	currency: string;
};

type InstallmentRepayment = {
	amountPaid: CurrencyAmount | null;
	_id: string;
	dueDate: string;
	datePaid: string | null;
	amountDue: CurrencyAmount;
	status: 'fully_paid' | 'not_paid';
	dateAdded: string;
	lastModifiedAt: string;
};

type Loan = {
	tenure: {
		value: number;
		interval: string;
	};
	dateLoanIsSettled: string | null;
	_id: string;
	loanReferenceId: string;
	applicationDate: string;
	dateLoanWasGranted: string;
	applicationStatus: 'approved' | 'pending' | 'rejected';
	amount: number;
	currency: string;
	totalInstallments: number;
	installmentRepayments: InstallmentRepayment[];
	loanRepaymentStatus: 'in_progress' | 'completed' | 'defaulted';
	dateLastInstallmentIsDue: string;
	client: string;
	businessId: string;
	createdAt: string;
	lastModifiedAt: string;
	__v: number;
	_createdAt: string;
	_lastModifiedAt: string;
	id: string;
};

export type TClient = typeof dummySingleClient

export type TOldClient = {
	loans: Loan[];
	latestDigitalCreditInfo: null; // Adjust this type based on actual structure if available
	digitalCreditInfoHistory: [] | null; // Adjust this type based on actual structure if available
	externalReferenceId: string;
	businessId: string;
	createdAt: string;
	lastModifiedAt: string;
	_createdAt: string;
	_lastModifiedAt: string;
	clientId: string;
	id: string;
	dataType: "sandbox" | "production",
	datasetsCountAllFromIp: number;
	phones: TPhone[]
};



export type TPagination = {
	totalDocs: number;
	perPage: number;
	totalPages: number;
	currentPage: number;
	serialNo: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage: number | null;
	nextPage: number | null;
};


// Phone types
type Permissions = {
	a: string;
	b: boolean;
};

type DeviceInfo = {
	accessibilityEnabled: boolean;
	adbEnabled: boolean;
	androidId: string | null;
	batteryCharging: boolean;
	batteryRemaining: number;
	bluetoothEnabled: boolean;
	board: string;
	brand: string;
	cpuType: string;
	dataRoamingEnabled: boolean;
	developerModeEnabled: boolean;
	device: string;
	displayLanguage: string;
	emulatorName: string | null;
	externalStorageFree: number;
	externalStorageTotal: number;
	fingerprintEnrolled: boolean;
	hardware: string;
	ipAddress: string;
	language: string;
	locationEnabled: boolean;
	mainStorageFree: number;
	mainStorageTotal: number;
	manufacturer: string;
	model: string;
	networkCountryIso: string;
	networkOperator: string;
	networkOperatorName: string;
	nextAlarmTime: number;
	operator: string;
	operatorName: string;
	phoneType: string;
	product: string;
	productionYear: number;
	rootedDevice: boolean;
	screenHeight: number;
	screenWidth: number;
	sdkVersion: number;
	serialNumber: string | null;
	simCountryIso: string;
	timeZone: string;
	usbMassStorageEnabled: boolean;
	useProxy: boolean;
	useVpn: boolean;
	wifiEnabled: boolean;
	networkConnectionType: string | null;
	ramTotalSize: number;
	osVersion: string;
	isVirtual: boolean;
	isStanding: boolean;
	isAngled: boolean;
	isLying: boolean;
};

type Asn = {
	asn: string;
	name: string;
	domain: string | null;
	route: string;
	type: string;
};

type Carrier = {
	name: string;
	mcc: string;
	mnc: string;
};

type Languages = {
	name: string;
	native: string;
	code: string;
};

type Currency = {
	name: string;
	code: string;
	symbol: string;
	native: string;
	plural: string;
};

type TimeZone = {
	name: string;
	abbr: string;
	offset: string;
	isDst: boolean;
	currentTime: string;
};

type Threat = {
	isTor: boolean;
	isIcloudRelay: boolean;
	isProxy: boolean;
	isDatacenter: boolean;
	isAnonymous: boolean;
	isKnownAttacker: boolean;
	isKnownAbuser: boolean;
	isThreat: boolean;
	isBogon: boolean;
};

type IpInfo = {
	ip: string;
	isEu: boolean;
	city: string;
	region: string;
	regionCode: string;
	regionType: string;
	countryName: string;
	countryCode: string;
	continentName: string;
	continentCode: string;
	latitude: number;
	longitude: number;
	postal: string | null;
	callingCode: string;
	flag: string;
	emojiFlag: string;
	emojiUnicode: string;
	asn: Asn;
	carrier: Carrier;
	languages: Record<string, Languages>;
	currency: Currency;
	timeZone: TimeZone;
	threat: Threat;
	count: string;
	status: number;
};

type AudioInfo = {
	totalAudioCount: number;
	totalMusicCount: number;
	totalAlarmCount: number;
	totalAudioBookCount: number;
	totalAudioPodcastCount: number;
	totalAudioRecordingCount: number;
	totalAudioRingToneCount: number;
};

type CalendarInfo = {
	totalPastEvents: number;
	totalCalendarEvents: number;
	totalOrganizedCalendarEvents: number;
	totalConfirmedCalendarEvents: number;
	totalWeekdayCalendarEvents: number;
	totalCalendarEventsWithMoreThanOneAttendee: number;
	totalCalendarEventsInDifferentTimeZone: number;
	totalCalendarEventsInLast30Days: number;
	totalEventsInNext30Days: number;
	totalRepetitiveCalendarEventsInLast30Days: number;
	totalWeekdayCalendarEventsInLast30Days: number;
};

type ContactInfo = {
	totalContacts: number;
	totalContactsWithoutAnyPhoneNumber: number;
	totalContactsWithMultiplePhoneNumbers: number;
	totalContactsMarkedAsFavorites: number;
	totalContactsWithAssociatedPicture: number;
	totalContactsWithSpecialRingtone: number;
	totalPhoneNumbers: number;
	totalPhoneNumbersMobile: number;
	totalPhoneNumbersWork: number;
	totalPhoneNumbersHome: number;
	totalPhoneNumbersOther: number;
};

type ImageInfo = {
	totalImages: number;
	totalImagesWithLocationProperty: number;
	mostFrequentImageResolution: string;
	totalImagesCreatedInLast30Days: number;
	totalImagesCreatedInLast360Days: number;
	firstMonthWithMoreThan10Images: string;
	totalImagesTakenByCamera: number;
	totalImagesTakenByCameraInLast30Days: number;
};

type VideoInfo = {
	totalVideos: number;
	totalVideosCreatedInLast30Days: number;
	totalVideosTakenByCamera: number;
	totalVideosTakenByCameraInLast30Days: number;
};

type SmsInfo = {
	totalSms: number;
	totalSmsInInbox: number;
	totalSmsInInboxWithStatusRead: number;
	totalSmsInInboxFromKnownNumber: number;
	totalSmsInOutbox: number;
	totalSmsInOutboxSentDuringWeekdays: number;
};

type CallInfo = {
	totalCalls: number;
	totalCallsToDistinctCountries: number;
	countryWithMostFrequentCall: string;
	totalCallsForEachType: {
		incoming: number;
		outgoing: number;
		missed: number;
		other: number;
	};
	totalCallsFromKnownNumbers: number;
	totalCallsFromUnknownNumbers: number;
	totalCallsDuringWeekdays: number;
};

type TAppInfo = {
	systemApps: Record<string, string | number | boolean>[];
	userApps: Record<string, Record<string, string>>[];
	unidentifiedUserApps: Record<string, Record<string, string>>[];
	userAppsPerCategory: Record<string, Record<string, string>>[];
	metadata: Record<string, Record<string, string>>[];
}

type AnalyzedData = {
	deviceInfo: DeviceInfo;
	ipInfo: IpInfo;
	locationInfo: string | null;
	audioInfo: AudioInfo;
	calendarInfo: CalendarInfo;
	contactInfo: ContactInfo;
	imageInfo: ImageInfo;
	videoInfo: VideoInfo;
	smsInfo: SmsInfo;
	callInfo: CallInfo;
	appInfo: TAppInfo;
};

type TPhone = {
	sdkVersion: string;
	permissions: Permissions[];
	analyzedData: AnalyzedData;
	_id: string;
	client: string;
	businessId: string;
	permissionLevel: string;
	dataCollectedAt: number;
	createdAt: string;
	lastModifiedAt: string;
	__v: number;
	_createdAt: string;
	_lastModifiedAt: string;
	id: string;
};



const appInfo = {
	"systemApps": [
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "MMIGroup",
			"packageName": "com.factory.mmigroup",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Automation Test",
			"packageName": "com.sec.android.app.DataCreate",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.cts.priv.ctsshim",
			"packageName": "com.android.cts.priv.ctsshim",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Qualcomm Mobile Security",
			"packageName": "com.qualcomm.qti.qms.service.telemetry",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Galaxy Essentials Widget",
			"packageName": "com.sec.android.widgetapp.samsungapps",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.samsung.android.smartswitchassistant",
			"packageName": "com.samsung.android.smartswitchassistant",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "NSDSWebApp",
			"packageName": "com.sec.vsim.ericssonnsds.webapp",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SetupWizardLegalProvider",
			"packageName": "com.sec.android.app.setupwizardlegalprovider",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Finder",
			"packageName": "com.samsung.android.app.galaxyfinder",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1712948574629,
			"name": "Galaxy Themes",
			"packageName": "com.samsung.android.themestore",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "ChromeCustomizations",
			"packageName": "com.sec.android.app.chromecustomizations",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Edge panels",
			"packageName": "com.samsung.android.app.cocktailbarservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Corner cutout",
			"packageName": "com.android.internal.display.cutout.emulation.corner",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Android Services Library",
			"packageName": "com.google.android.ext.services",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Double cutout",
			"packageName": "com.android.internal.display.cutout.emulation.double",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Phone and Messaging Storage",
			"packageName": "com.android.providers.telephony",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Samsung Editing Assets",
			"packageName": "com.sec.android.app.ve.vebgm",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "DRParser Mode",
			"packageName": "com.sec.android.app.parser",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Dynamic System Updates",
			"packageName": "com.android.dynsystem",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gestural Navigation Bar",
			"packageName": "com.samsung.internal.systemui.navbar.gestural_no_hint_wide_back",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "NetworkStackOverlay",
			"packageName": "com.samsung.android.networkstack",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Pebble",
			"packageName": "com.android.theme.icon.pebble",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Calendar",
			"packageName": "com.samsung.android.calendar",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Time Zone Updater",
			"packageName": "com.samsung.android.timezone.updater",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Calendar storage",
			"packageName": "com.android.providers.calendar",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Samsung account",
			"packageName": "com.osp.app.signin",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "ClipboardSaveService",
			"packageName": "com.samsung.clipboardsaveservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "TetheringAutomation",
			"packageName": "com.sec.automation",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.providers.media",
			"packageName": "com.android.providers.media",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Google One Time Init",
			"packageName": "com.google.android.onetimeinitializer",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Android Shared Library",
			"packageName": "com.google.android.ext.shared",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gestural Navigation Bar",
			"packageName": "com.android.internal.systemui.navbar.gestural_wide_back",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.wallpapercropper",
			"packageName": "com.android.wallpapercropper",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Vessel",
			"packageName": "com.android.theme.icon.vessel",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.samsung.android.wallpaper.res",
			"packageName": "com.samsung.android.wallpaper.res",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Cinnamon",
			"packageName": "com.android.theme.color.cinnamon",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Smart View",
			"packageName": "com.samsung.android.smartmirroring",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Application recommendations",
			"packageName": "com.samsung.android.mapsagent",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Send SOS Messages",
			"packageName": "com.sec.android.app.safetyassurance",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Call",
			"packageName": "com.samsung.android.incallui",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Rounded",
			"packageName": "com.android.theme.icon_pack.rounded.systemui",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Tapered Rect",
			"packageName": "com.android.theme.icon.taperedrect",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "USBSettings",
			"packageName": "com.sec.usbsettings",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Nearby device scanning",
			"packageName": "com.samsung.android.easysetup",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "External Storage",
			"packageName": "com.android.externalstorage",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Quick Share",
			"packageName": "com.samsung.android.aware.service",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "EasyOneHand",
			"packageName": "com.sec.android.easyonehand",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "HTML Viewer",
			"packageName": "com.android.htmlviewer",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Companion Device Manager",
			"packageName": "com.android.companiondevicemanager",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "MmsService",
			"packageName": "com.android.mms.service",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Customisation Service",
			"packageName": "com.samsung.android.rubin.app",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.qualcomm.qti.qms.service.connectionsecurity",
			"packageName": "com.qualcomm.qti.qms.service.connectionsecurity",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Download Manager",
			"packageName": "com.android.providers.downloads",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Smart Switch Agent",
			"packageName": "com.sec.android.easyMover.Agent",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Media and devices",
			"packageName": "com.samsung.android.mdx.quickboard",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Rounded",
			"packageName": "com.android.theme.icon_pack.rounded.android",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Configuration message",
			"packageName": "com.wsomacp",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "FaceService",
			"packageName": "com.samsung.faceservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "PartnerNetflixActivation",
			"packageName": "com.netflix.partner.activation",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Foundation",
			"packageName": "com.monotype.android.font.foundation",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "MTP application",
			"packageName": "com.samsung.android.MtpApplication",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "DeviceKeystring",
			"packageName": "com.sec.android.app.factorykeystring",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1712949051255,
			"name": "Galaxy Store",
			"packageName": "com.sec.android.app.samsungapps",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "EmergencyManagerService",
			"packageName": "com.sec.android.emergencymode.service",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "org.ifaa.android.service",
			"packageName": "org.ifaa.android.service",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Circular",
			"packageName": "com.android.theme.icon_pack.circular.themepicker",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "ConfigUpdater",
			"packageName": "com.google.android.configupdater",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "WlanTest",
			"packageName": "com.sec.android.app.wlantest",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "TalkBack",
			"packageName": "com.samsung.android.accessibility.talkback",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.google.android.overlay.modules.permissioncontroller",
			"packageName": "com.google.android.overlay.modules.permissioncontroller",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SettingsBixby",
			"packageName": "com.samsung.android.app.settings.bixby",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Samsung Checkout",
			"packageName": "com.sec.android.app.billing",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "EpdgTestApp",
			"packageName": "com.sec.epdgtestapp",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1712764048457,
			"name": "Samsung Time Zone Data",
			"packageName": "com.samsung.android.timezone.data_R",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Weather",
			"packageName": "com.sec.android.daemonapp",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SecVideoEngineService",
			"packageName": "com.sec.sve",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Downloads",
			"packageName": "com.android.providers.downloads.ui",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1723256310433,
			"name": "Google Play Store",
			"packageName": "com.android.vending",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "PacProcessor",
			"packageName": "com.android.pacprocessor",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Sim app dialogue",
			"packageName": "com.android.simappdialog",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SecSoundPicker",
			"packageName": "com.samsung.android.secsoundpicker",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gestural Navigation Bar",
			"packageName": "com.samsung.internal.systemui.navbar.sec_gestural",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "OneDrive",
			"packageName": "com.microsoft.skydrive",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Settings",
			"packageName": "com.samsung.android.SettingsReceiver",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Punch hole cutout",
			"packageName": "com.android.internal.display.cutout.emulation.hole",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Tall cutout",
			"packageName": "com.android.internal.display.cutout.emulation.tall",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SoundAlive",
			"packageName": "com.sec.android.app.soundalive",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "BadgeProvider",
			"packageName": "com.sec.android.provider.badge",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Certificate Installer",
			"packageName": "com.android.certinstaller",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SecurityLogAgent",
			"packageName": "com.samsung.android.securitylogagent",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Black",
			"packageName": "com.android.theme.color.black",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.carrierconfig",
			"packageName": "com.android.carrierconfig",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Green",
			"packageName": "com.android.theme.color.green",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Ocean",
			"packageName": "com.android.theme.color.ocean",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Space",
			"packageName": "com.android.theme.color.space",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "3 Button Navigation Bar",
			"packageName": "com.android.internal.systemui.navbar.threebutton",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Samsung text-to-speech engine",
			"packageName": "com.samsung.SMT",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "CMHProvider",
			"packageName": "com.samsung.cmh",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "mlp",
			"packageName": "com.samsung.mlp",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "RcsSettings",
			"packageName": "com.samsung.rcs",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Android System",
			"packageName": "android",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Device security",
			"packageName": "com.samsung.android.sm.devicesecurity",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.google.android.overlay.modules.cellbroadcastreceiver",
			"packageName": "com.google.android.overlay.modules.cellbroadcastreceiver",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Rounded",
			"packageName": "com.android.theme.icon_pack.rounded.launcher",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Configuration update",
			"packageName": "com.samsung.android.providers.carrier",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gestural Navigation Bar",
			"packageName": "com.samsung.internal.systemui.navbar.sec_gestural_no_hint",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Android R Easter Egg",
			"packageName": "com.android.egg",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "MTP Host",
			"packageName": "com.android.mtp",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.ons",
			"packageName": "com.android.ons",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Airtel",
			"packageName": "com.android.stk",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Messages",
			"packageName": "com.samsung.android.messaging",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.backupconfirm",
			"packageName": "com.android.backupconfirm",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "FmTest",
			"packageName": "com.mmigroup.fmradio",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "KLMS Agent",
			"packageName": "com.samsung.klmsagent",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SmartFittingService",
			"packageName": "com.samsung.android.smartfitting",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Samsung setup wizard",
			"packageName": "com.sec.android.app.SecSetupWizard",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Call settings",
			"packageName": "com.samsung.android.app.telephonyui",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.samsung.android.wifi.softap.resources",
			"packageName": "com.samsung.android.wifi.softap.resources",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Intent Filter Verification Service",
			"packageName": "com.android.statementservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.google.android.overlay.gmsconfig.common",
			"packageName": "com.google.android.overlay.gmsconfig.common",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Settings Suggestions",
			"packageName": "com.android.settings.intelligence",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.sec.bcservice",
			"packageName": "com.sec.bcservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SilentLogging",
			"packageName": "com.sec.modem.settings",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SamsungOne",
			"packageName": "com.monotype.android.font.samsungone",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gestural Navigation Bar",
			"packageName": "com.android.internal.systemui.navbar.gestural_extra_wide_back",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Permission controller",
			"packageName": "com.google.android.permissioncontroller",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Service mode",
			"packageName": "com.sec.android.app.servicemodeapp",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Application Installer",
			"packageName": "com.sec.android.preloadinstaller",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Android Setup",
			"packageName": "com.google.android.setupwizard",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gallery",
			"packageName": "com.sec.android.gallery3d",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Settings Storage",
			"packageName": "com.android.providers.settings",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Accessibility",
			"packageName": "com.samsung.accessibility",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "IMS Service",
			"packageName": "com.sec.imsservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.sharedstoragebackup",
			"packageName": "com.android.sharedstoragebackup",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Facebook Services",
			"packageName": "com.facebook.services",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Group Sharing",
			"packageName": "com.samsung.android.mobileservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "MDE Service Framework",
			"packageName": "com.samsung.android.mdx.kit",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Filled",
			"packageName": "com.android.theme.icon_pack.filled.settings",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gallery stories",
			"packageName": "com.samsung.storyservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Basic Daydreams",
			"packageName": "com.android.dreams.basic",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gestural Navigation Bar",
			"packageName": "com.samsung.internal.systemui.navbar.gestural_no_hint_extra_wide_back",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SecureElementApplication",
			"packageName": "com.android.se",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Input Devices",
			"packageName": "com.android.inputdevices",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.samsung.android.wifi.resources",
			"packageName": "com.samsung.android.wifi.resources",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.google.android.overlay.gmsconfig.photos",
			"packageName": "com.google.android.overlay.gmsconfig.photos",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1719493701848,
			"name": "Device Services",
			"packageName": "com.samsung.android.kgclient",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Default Print Service",
			"packageName": "com.android.bips",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "MTN Menu",
			"packageName": "com.android.stk2",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Contacts",
			"packageName": "com.samsung.android.app.contacts",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "People",
			"packageName": "com.samsung.android.service.peoplestripe",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Dual Messenger",
			"packageName": "com.samsung.android.da.daagent",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "AfterSaleCalibrationTool",
			"packageName": "com.sec.android.app.aftersalecamera",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1712986919407,
			"name": "Captive portal login",
			"packageName": "com.google.android.captiveportallogin",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Circular",
			"packageName": "com.android.theme.icon_pack.circular.settings",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "FingerprintExtensionService",
			"packageName": "com.fingerprints.extension.service",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.samsung.android.networkstack.tethering.inprocess.overlay",
			"packageName": "com.samsung.android.networkstack.tethering.inprocess.overlay",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Smart Call",
			"packageName": "com.samsung.android.smartcallprovider",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Samsung capture",
			"packageName": "com.samsung.android.app.smartcapture",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1715308776277,
			"name": "Maps",
			"packageName": "com.google.android.apps.maps",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1716712360834,
			"name": "Main components",
			"packageName": "com.google.android.modulemetadata",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Tasks",
			"packageName": "com.samsung.android.app.taskedge",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Wallpaper services",
			"packageName": "com.samsung.android.dynamiclock",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.sec.android.app.camerasaver",
			"packageName": "com.sec.android.app.camerasaver",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "IMS Settings",
			"packageName": "com.samsung.advp.imssettings",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "slocation",
			"packageName": "com.samsung.android.location",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Samsung Keyboard (deprecated)",
			"packageName": "com.sec.android.inputmethod",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.wt.wtsarmanager",
			"packageName": "com.wt.wtsarmanager",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Wireless emergency alerts",
			"packageName": "com.android.cellbroadcastreceiver",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Clock",
			"packageName": "com.sec.android.app.clockpackage",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Service mode RIL",
			"packageName": "com.sec.android.RilServiceModeApp",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Teardrop",
			"packageName": "com.android.theme.icon.teardrop",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.google.android.overlay.modules.documentsui",
			"packageName": "com.google.android.overlay.modules.documentsui",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1716712361077,
			"name": "Network manager",
			"packageName": "com.google.android.networkstack",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Phone",
			"packageName": "com.android.server.telecom",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Google Contacts Sync",
			"packageName": "com.google.android.syncadapters.contacts",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Phone",
			"packageName": "com.samsung.crane",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Cell Broadcast Service",
			"packageName": "com.android.cellbroadcastservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "ImsLogger",
			"packageName": "com.sec.imslogger",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Rounded",
			"packageName": "com.android.theme.icon_pack.rounded.themepicker",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Key Chain",
			"packageName": "com.android.keychain",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Galaxy Themes Service",
			"packageName": "com.samsung.android.themecenter",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Filled",
			"packageName": "com.android.theme.icon_pack.filled.systemui",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Package installer",
			"packageName": "com.google.android.packageinstaller",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Google Services Framework",
			"packageName": "com.google.android.gsf",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1712762202551,
			"name": "ConfigAPK",
			"packageName": "android.autoinstalls.config.samsung",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "System Wi-Fi resources",
			"packageName": "com.android.wifi.resources",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "ContainerService",
			"packageName": "com.samsung.android.container",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Call Log Backup/Restore",
			"packageName": "com.android.calllogbackup",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "DiagMonAgent",
			"packageName": "com.sec.android.diagmonagent",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.localtransport",
			"packageName": "com.android.localtransport",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.google.android.overlay.gmsconfig.gsa",
			"packageName": "com.google.android.overlay.gmsconfig.gsa",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.samsung.android.biometrics.app.setting",
			"packageName": "com.samsung.android.biometrics.app.setting",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "CarrierDefaultApp",
			"packageName": "com.android.carrierdefaultapp",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Noto Serif / Source Sans Pro",
			"packageName": "com.android.theme.font.notoserifsource",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "My Files",
			"packageName": "com.sec.android.app.myfiles",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Filled",
			"packageName": "com.android.theme.icon_pack.filled.android",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "ProxyHandler",
			"packageName": "com.android.proxyhandler",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Waterfall cutout",
			"packageName": "com.android.internal.display.cutout.emulation.waterfall",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Wi-Fi Direct",
			"packageName": "com.samsung.android.allshare.service.fileshare",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1713549319381,
			"name": "Netflix",
			"packageName": "com.netflix.mediaclient",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Circular",
			"packageName": "com.android.theme.icon_pack.circular.systemui",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Photo Editor",
			"packageName": "com.sec.android.mimage.photoretouching",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "One UI Home",
			"packageName": "com.sec.android.app.launcher",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.google.android.overlay.modules.permissioncontroller.forframework",
			"packageName": "com.google.android.overlay.modules.permissioncontroller.forframework",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Market Feedback Agent",
			"packageName": "com.google.android.feedback",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Print Service Recommendation Service",
			"packageName": "com.google.android.printservice.recommendation",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Google Calendar Sync",
			"packageName": "com.google.android.syncadapters.calendar",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Work Setup",
			"packageName": "com.android.managedprovisioning",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Separate app sound",
			"packageName": "com.samsung.android.setting.multisound",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "aidlserverdemo",
			"packageName": "com.tencent.soter.soterserver",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1716712361292,
			"name": "Files",
			"packageName": "com.google.android.documentsui",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Photo Screensavers",
			"packageName": "com.android.dreams.phototable",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1721096335272,
			"name": "Support components",
			"packageName": "com.google.mainline.telemetry",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Safety information",
			"packageName": "com.samsung.safetyinformation",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Phone",
			"packageName": "com.samsung.android.dialer",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "DQA",
			"packageName": "com.samsung.android.dqagent",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "ringtonebackup",
			"packageName": "com.sec.android.app.ringtoneBR",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Game Optimizing Service",
			"packageName": "com.samsung.android.game.gos",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Digital Wellbeing",
			"packageName": "com.samsung.android.forest",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.providers.partnerbookmarks",
			"packageName": "com.android.providers.partnerbookmarks",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gestural Navigation Bar",
			"packageName": "com.samsung.internal.systemui.navbar.gestural_no_hint_narrow_back",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Live Wallpaper Picker",
			"packageName": "com.android.wallpaper.livepicker",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SmartThings",
			"packageName": "com.samsung.android.beaconmanager",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gestural Navigation Bar",
			"packageName": "com.samsung.internal.systemui.navbar.gestural_no_hint",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Enterprise Sim Pin Service",
			"packageName": "com.sec.enterprise.mdm.services.simpin",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "StickerCenter",
			"packageName": "com.samsung.android.stickercenter",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Facebook App Installer",
			"packageName": "com.facebook.system",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Sec Media Storage",
			"packageName": "com.samsung.android.providers.media",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Software update",
			"packageName": "com.sec.android.soagent",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Tools",
			"packageName": "com.sec.android.app.quicktool",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Find My Mobile",
			"packageName": "com.samsung.android.fmm",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "MDMApp",
			"packageName": "com.samsung.android.mdm",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Samsung Core Services",
			"packageName": "com.samsung.android.scs",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Wi-Fi Calling",
			"packageName": "com.sec.unifiedwfc",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Squircle",
			"packageName": "com.android.theme.icon.squircle",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.sec.phone",
			"packageName": "com.sec.phone",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "App update",
			"packageName": "com.samsung.android.app.updatecenter",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Samsung Keyboard",
			"packageName": "com.samsung.android.honeyboard",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.server.NetworkPermissionConfig",
			"packageName": "com.google.android.networkstack.permissionconfig",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Storage Manager",
			"packageName": "com.android.storagemanager",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Samsung Cloud",
			"packageName": "com.samsung.android.scloud",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Sound picker",
			"packageName": "com.samsung.android.app.soundpicker",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Quick Share",
			"packageName": "com.samsung.android.app.sharelive",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Error",
			"packageName": "com.sec.app.RilErrorNotifier",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Bookmark Provider",
			"packageName": "com.android.bookmarkprovider",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Settings",
			"packageName": "com.android.settings",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Video trimmer",
			"packageName": "com.samsung.app.newtrim",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Dsms",
			"packageName": "com.samsung.android.dsms",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Device care",
			"packageName": "com.samsung.android.lool",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "BluetoothTest",
			"packageName": "com.sec.android.app.bluetoothtest",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Samsung Device Health Manager Service",
			"packageName": "com.sec.android.sdhms",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Filled",
			"packageName": "com.android.theme.icon_pack.filled.launcher",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SCPM Client",
			"packageName": "com.samsung.android.sm.policy",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Tethering",
			"packageName": "com.android.networkstack.tethering.inprocess",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Launcher",
			"packageName": "com.sec.android.emergencylauncher",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Locale Overlay Manager",
			"packageName": "com.samsung.android.localeoverlaymanager",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1715309739763,
			"name": "Android Auto",
			"packageName": "com.google.android.projection.gearhead",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Device Health Services",
			"packageName": "com.google.android.apps.turbo",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Eye comfort shield",
			"packageName": "com.samsung.android.bluelightfilter",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "CallBGProvider",
			"packageName": "com.samsung.android.callbgprovider",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.cts.ctsshim",
			"packageName": "com.android.cts.ctsshim",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Wearable Manager Installer",
			"packageName": "com.samsung.android.app.watchmanagerstub",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Auto Hotspot",
			"packageName": "com.sec.mhs.smarttethering",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Circular",
			"packageName": "com.android.theme.icon_pack.circular.launcher",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "NetworkDiagnostic",
			"packageName": "com.samsung.android.networkdiagnostic",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "ShortcutBNR",
			"packageName": "com.samsung.android.shortcutbackupservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "VpnDialogs",
			"packageName": "com.android.vpndialogs",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.samsung.android.networkstack.tethering.overlay",
			"packageName": "com.samsung.android.networkstack.tethering.overlay",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Contacts Storage",
			"packageName": "com.samsung.android.providers.contacts",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Phone",
			"packageName": "com.android.phone",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Shell",
			"packageName": "com.android.shell",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Filled",
			"packageName": "com.android.theme.icon_pack.filled.themepicker",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.wallpaperbackup",
			"packageName": "com.android.wallpaperbackup",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Blocked Numbers Storage",
			"packageName": "com.android.providers.blockednumber",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Configuration update",
			"packageName": "com.samsung.android.app.omcagent",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Hiya Service",
			"packageName": "com.hiya.star",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.google.android.overlay.modules.cellbroadcastservice",
			"packageName": "com.google.android.overlay.modules.cellbroadcastservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "User Dictionary",
			"packageName": "com.android.providers.userdictionary",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Media Storage",
			"packageName": "com.android.providers.media.module",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Knox Enrollment Service",
			"packageName": "com.sec.enterprise.knox.cloudmdm.smdms",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Software update",
			"packageName": "com.wssyncmldm",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "OsuLogin",
			"packageName": "com.android.hotspot2.osulogin",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "SimMobilityKit",
			"packageName": "com.samsung.ims.smk",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Google Location History",
			"packageName": "com.google.android.gms.location.history",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gestural Navigation Bar",
			"packageName": "com.android.internal.systemui.navbar.gestural",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1712764977527,
			"name": "Mobile Services Manager",
			"packageName": "com.dti.samsung",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Fused Location",
			"packageName": "com.android.location.fused",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Orchid",
			"packageName": "com.android.theme.color.orchid",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Apps",
			"packageName": "com.samsung.android.app.appsedge",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.sec.epdg",
			"packageName": "com.sec.epdg",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "System UI",
			"packageName": "com.android.systemui",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Perso",
			"packageName": "com.sec.android.app.personalization",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Purple",
			"packageName": "com.android.theme.color.purple",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Bluetooth MIDI Service",
			"packageName": "com.android.bluetoothmidiservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "HandwritingService",
			"packageName": "com.samsung.android.sdk.handwriting",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Facebook App Manager",
			"packageName": "com.facebook.appmanager",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Clock style",
			"packageName": "com.samsung.android.app.clockpack",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.android.camera.app.CameraApp",
			"packageName": "com.sec.android.app.camera.sticker",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "AASAservice",
			"packageName": "com.samsung.aasaservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "System Tracing",
			"packageName": "com.android.traceur",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Nearby Service",
			"packageName": "com.samsung.android.allshare.service.mediashare",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Radio",
			"packageName": "com.sec.android.app.fm",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "EmergencyProvider",
			"packageName": "com.sec.android.provider.emergencymode",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "CIDManager",
			"packageName": "com.samsung.android.cidmanager",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Camera",
			"packageName": "com.sec.android.app.camera",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Bluetooth",
			"packageName": "com.android.bluetooth",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Clipboard edge",
			"packageName": "com.samsung.android.app.clipboardedge",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.qualcomm.timeservice",
			"packageName": "com.qualcomm.timeservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.qualcomm.atfwd",
			"packageName": "com.qualcomm.atfwd",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "com.qualcomm.embms",
			"packageName": "com.qualcomm.embms",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "IPService",
			"packageName": "com.samsung.ipservice",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Magnifier",
			"packageName": "com.sec.android.app.magnifier",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "User manual",
			"packageName": "com.sec.android.widgetapp.webmanual",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "CSC",
			"packageName": "com.samsung.sec.android.application.csc",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Configuration update",
			"packageName": "com.samsung.android.sdm.config",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Rounded Rectangle",
			"packageName": "com.android.theme.icon.roundedrect",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Wallpapers",
			"packageName": "com.samsung.android.app.dressroom",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Gestural Navigation Bar",
			"packageName": "com.android.internal.systemui.navbar.gestural_narrow_back",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Portrait",
			"packageName": "com.samsung.android.app.dofviewer",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Rounded",
			"packageName": "com.android.theme.icon_pack.rounded.settings",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Face",
			"packageName": "com.samsung.android.bio.face.service",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Video Player",
			"packageName": "com.samsung.android.video",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "android.auto_generated_rro_vendor__",
			"packageName": "android.auto_generated_rro_vendor__",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Circular",
			"packageName": "com.android.theme.icon_pack.circular.android",
			"system": true
		},
		{
			"category": "other",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Android Setup",
			"packageName": "com.google.android.apps.restore",
			"system": true
		},
		{
			"category": "video",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1715309402761,
			"name": "YouTube",
			"packageName": "com.google.android.youtube",
			"system": true
		},
		{
			"category": "productivity",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1715308567831,
			"name": "Google",
			"packageName": "com.google.android.googlequicksearchbox",
			"system": true
		},
		{
			"category": "productivity",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1230735600000,
			"name": "Print Spooler",
			"packageName": "com.android.printspooler",
			"system": true
		},
		{
			"category": "productivity",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1723184522169,
			"name": "Android System WebView",
			"packageName": "com.google.android.webview",
			"system": true
		},
		{
			"category": "productivity",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1721189251971,
			"name": "Google Play services",
			"packageName": "com.google.android.gms",
			"system": true
		},
		{
			"category": "productivity",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1715309830348,
			"name": "Speech Recognition and Synthesis from Google",
			"packageName": "com.google.android.tts",
			"system": true
		},
		{
			"category": "productivity",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1715308861002,
			"name": "Google Partner Setup",
			"packageName": "com.google.android.partnersetup",
			"system": true
		},
		{
			"category": "productivity",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1715309801068,
			"name": "Google Wi-Fi Provisioner",
			"packageName": "com.google.android.apps.carrier.carrierwifi",
			"system": true
		},
		{
			"category": "social",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1715308428748,
			"name": "Gmail",
			"packageName": "com.google.android.gm",
			"system": true
		},
		{
			"category": "social",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1715308839288,
			"name": "Meet",
			"packageName": "com.google.android.apps.tachyon",
			"system": true
		},
		{
			"category": "social",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1717194257367,
			"name": "Chrome",
			"packageName": "com.android.chrome",
			"system": true
		},
		{
			"category": "social",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1713163942937,
			"name": "Samsung Push Service",
			"packageName": "com.sec.spp.push",
			"system": true
		},
		{
			"category": "social",
			"firstInstallTime": 1230735600000,
			"lastUpdateTime": 1717196099479,
			"name": "Facebook",
			"packageName": "com.facebook.katana",
			"system": true
		}
	],
	"userApps": [
		{
			"name": "CDcare",
			"description": "CDcare Marketplace lets Africans buy  appliances &amp; pay in installments.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Shopping",
					"id": "SHOPPING"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/nCmgmni6WI64Yn_XgKwwkUGuiRabN-Y4mWoIta_pFsA9uIpwdwxwOUySLLjIUyhGWg",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1716849539472,
			"lastUpdateTime": 1716849539472,
			"packageName": "com.nipek.cdcare"
		},
		{
			"name": "Samsung Voice Recorder",
			"description": "- Voice recorder for Samsung Galaxy series",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Tools",
					"id": "TOOLS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/EaHQ7KJNn6ZAICf0kEVwKunD4hZd-59oggNErDPDKTaK20sXXfVUN0AYJP70-x8UjQ",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712781613514,
			"lastUpdateTime": 1712781613514,
			"packageName": "com.sec.android.app.voicenote"
		},
		{
			"name": "Duolingo: Language Lessons",
			"description": "Learn Spanish, French, German, Italian, English and more languages for free.",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$0.99 - $239.99 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Education",
					"id": "EDUCATION"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/rIY2-S9PdrIac8VisSHWgQZvjTO6GurVDwKSXG68rILtRas1cexV_EJ8426y1Bvvkg",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1720363790449,
			"lastUpdateTime": 1720363790449,
			"packageName": "com.duolingo"
		},
		{
			"name": "Samsung Music",
			"description": "- Music player for Samsung Galaxy series- Supports for Android",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Music & Audio",
					"id": "MUSIC_AND_AUDIO"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/olj6n0kCUo_x3lNfgvzdGR5k_NEsz2D9PuC8evI0hYCHLSQHBhKY-cQwZ4EtWnac28o",
			"contentRating": "13+",
			"includesAds": true,
			"firstInstallTime": 1712949404981,
			"lastUpdateTime": 1712949404981,
			"packageName": "com.sec.android.app.music"
		},
		{
			"name": "SportyBet - Sports Betting App",
			"description": "Watch and bet on the best sports events with Nigeria's premier bookmaker.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Sports",
					"id": "SPORTS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/JYHZmo4I9xbALXJD7XCEtWxAz7sHc2Bw-Ij1J-HqryjZfgfuKpap_D1kOS9lt32iKU4",
			"contentRating": null,
			"includesAds": false,
			"firstInstallTime": 1712765098244,
			"lastUpdateTime": 1717196039186,
			"packageName": "com.sportybet.android.gp"
		},
		{
			"name": "Samsung Internet Browser",
			"description": "The secure, private and optimized mobile web browser from Samsung",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Communication",
					"id": "COMMUNICATION"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/wFAmWrV_t9YT75C6Vbyl1UupslTlq_lm7AcEPamSvWbqumIqKYfTpV_Ro_iC0fAjAQU",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712778349389,
			"lastUpdateTime": 1712778349389,
			"packageName": "com.sec.android.app.sbrowser"
		},
		{
			"name": "Samsung Calculator",
			"description": "This app provides the four fundamental operations and engineering calculations.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Tools",
					"id": "TOOLS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/Z5BA3DYVKalnbCW8CGlIM3bN699i6QwRs5oE5kr_1-OYApm2cLPSlOP6mbdUJunXtw",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712781583649,
			"lastUpdateTime": 1712781583649,
			"packageName": "com.sec.android.app.popupcalculator"
		},
		{
			"name": "Samsung Members",
			"description": "Expert support, community connection\n&amp; exclusive perks.\nPossibility starts here.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Tools",
					"id": "TOOLS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/5MlRrSa9Wm47Ig9kd9mDD9J3ekq_Pj1LXqeEJ3korTCsrc2d68HBWJYNYs6_p_fMBw",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712781541168,
			"lastUpdateTime": 1712781541168,
			"packageName": "com.samsung.android.voc"
		},
		{
			"name": "Samsung Notes",
			"description": "Samsung Notes can create and edit documents and collaborate with others",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Productivity",
					"id": "PRODUCTIVITY"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/YtLBM6IPz0ZWno6QCLJVqASU0E8OLFmxd-eepUSpAEmFIQzZrq7to1VJ20s-A5iMFA",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712781341572,
			"lastUpdateTime": 1712781341572,
			"packageName": "com.samsung.android.app.notes"
		},
		{
			"name": "Jiji Nigeria: Buy&Sell Online",
			"description": "Buy &amp; Sell Anything in Nigeria",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Shopping",
					"id": "SHOPPING"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/a7zExJW7nVh-HkP0J10vL8odsBYj1Wq6ctD25suqaSxkocdB1FkJtbclxdiSMRKYJ20",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1714062666032,
			"lastUpdateTime": 1715308929462,
			"packageName": "ng.jiji.app"
		},
		{
			"name": "JUMIA Online Shopping",
			"description": "Get ready for big deals, with Jumia 🛒, you always win!",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Shopping",
					"id": "SHOPPING"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/K02ShY9ODJ9xGxXVqYKbDUOXczHHdKUnE9YRyurDdPkXe_THCWy-Fpo417seGIsMchA",
			"contentRating": "13+",
			"includesAds": true,
			"firstInstallTime": 1712793445475,
			"lastUpdateTime": 1717195628029,
			"packageName": "com.jumia.android"
		},
		{
			"name": "NHPay",
			"description": "Make Secure your Payments with NH Pay App",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Shopping",
					"id": "SHOPPING"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/LKtMq_HZm2MobjwN83A0eNp2LRgkgAcBZPVraPYOdY8PLu3Jq-36XBdCUH3KcY8ieDU",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1713773841652,
			"lastUpdateTime": 1713773841652,
			"packageName": "io.peppa.nhi"
		},
		{
			"name": "Figma – prototype mirror share",
			"description": "View your designs and collaborate on the go",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Art & Design",
					"id": "ART_AND_DESIGN"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/efwNlvQ3pch_-hZ9xeHf6YF-f_rHzQQo21IVevPLOxpzSVfxuVKom2_7C6axFbC-3rU",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712963692724,
			"lastUpdateTime": 1718479884029,
			"packageName": "com.figma.mirror"
		},
		{
			"name": "Peppa: Buy & Sell Securely",
			"description": "Buy safely &amp; sell securely with escrow &amp; other features online. 🛒🔒",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Shopping",
					"id": "SHOPPING"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/3XBH5scF1fktJhoen-4qVw4XRulP3D9lDtXjR3eiuG0_A5wtcEtykawPsDCk7Rf5efVi",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712962045376,
			"lastUpdateTime": 1721117815946,
			"packageName": "com.paysure.peppa"
		},
		{
			"name": "Chelsea FC - The 5th Stand",
			"description": "Welcome to Chelsea FC's Official App",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$1.49 - $7.49 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Sports",
					"id": "SPORTS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/nPMQvWjcZtG8XCYDLAT4s1j4BRq-JQ5gqGHRPHi8QAXsRvNVgY-j-eTfbfmUIGvxMw",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1713208699068,
			"lastUpdateTime": 1721849396371,
			"packageName": "com.chelseafc.the5thstand"
		},
		{
			"name": "Screen Recorder - XRecorder",
			"description": "Screen recorder with audio to take live videos&amp; Screenshot in high quality!",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$5.99 - $49.99 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Video Players & Editors",
					"id": "VIDEO_PLAYERS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/RX8RBGnnxFgncaU649msEAdLpQmXiSlzAZrjOtdSnvyptB16wWlQNFdRrMWNSdkIQ2tn",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1712969445857,
			"lastUpdateTime": 1715309594141,
			"packageName": "videoeditor.videorecorder.screenrecorder"
		},
		{
			"name": "Cowrywise: Save & invest money",
			"description": "The only SEC-licensed wealth management app you really need. Plan, save &amp; invest",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Finance",
					"id": "FINANCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/kkgvkSlfdTFZK2CPuPfypGGdD7jjw9M_UCJn6fvre6txp-HeqNWkU0xWODaec-9gXg",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712969000860,
			"lastUpdateTime": 1717194300857,
			"packageName": "com.cowrywise.android"
		},
		{
			"name": "Kuda - Transfers and payments",
			"description": "Pay your bills, make unlimited cashless payments and save money with interest.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Finance",
					"id": "FINANCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/C7ojJSQlm0ae8xRxH7kiET-PxIHSZfk2BQ8-ipu0H7EiUnIcgpgDmHLVfZyIEj7wzxrY",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712793354819,
			"lastUpdateTime": 1719995826274,
			"packageName": "com.kudabank.app"
		},
		{
			"name": "Status Saver・Status Downloader",
			"description": "Simple and intuitive Status Saver app. Save favorite status updates - status app",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$0.99 - $99.99 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Tools",
					"id": "TOOLS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/lEdwAmDVnW2rmeS2A96ngRfB_1PsJyBMOdkd_YlHaqTNF4haMULv45N6qzwkvdccHQ",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1713738280473,
			"lastUpdateTime": 1713738280473,
			"packageName": "com.falnesc.statussaver"
		},
		{
			"name": "GTWorld",
			"description": "A Mobile Banking App that is designed to cater to all that's important to you.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Finance",
					"id": "FINANCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/ORpKPnpcVp6uKb9mSzUsAG60pKheK5F1WpwaoXnTdhE7d_gPH053e-Xr2rg0s_zcGkQ",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1714664893997,
			"lastUpdateTime": 1714664893997,
			"packageName": "com.gtbank.gtworldv1"
		},
		{
			"name": "Zoho Mail - Email and Calendar",
			"description": "Zoho Mail - Email, Calendar, Contacts and Files on the move!",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Productivity",
					"id": "PRODUCTIVITY"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/9AjFvEP6RP6zRd41Z9cuiyHe_qD47a1AN0QrvW9Ec0OfsmG9x-t09nmTQMAmmZuYrdso",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712794751863,
			"lastUpdateTime": 1715309694248,
			"packageName": "com.zoho.mail"
		},
		{
			"name": "Zoho Calendar",
			"description": "Online business calendar to manage your schedules and events collaboratively.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Productivity",
					"id": "PRODUCTIVITY"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/CeUq4-SKxGOczKF6v8pKvUns-12YHrztRF-rE4Avp_E84L7CpcSiRGEHgWdqd0GO1g",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1717415796157,
			"lastUpdateTime": 1717415796157,
			"packageName": "com.zoho.android.calendar"
		},
		{
			"name": "Fundall - Bank, Invest & Plan",
			"description": "Save, invest, make online payments, get insurance, see spending insights &amp; more.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Finance",
					"id": "FINANCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/5ojgoNbiZWQBBN79kACGLr2e3qLRwTWL-XfVVygy1yX8b6k-NSeajnO73FABlG_doYE",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1717189528354,
			"lastUpdateTime": 1717189528354,
			"packageName": "com.fundall.io"
		},
		{
			"name": "Zoho Meeting - Online Meetings",
			"description": "Join online meetings &amp; webinars with real-time audio, video, and screen sharing",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Business",
					"id": "BUSINESS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/ugEiB2IKOedG8gEE5HtJboLAUNcy3Vgc4T0TJJec4-0RT_jGuBdlGkArgFG_Vj-hNo4",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1717760868101,
			"lastUpdateTime": 1717760868101,
			"packageName": "com.zoho.meeting"
		},
		{
			"name": "Zenith Bank Mobile App",
			"description": "Pay Bills | Airtime Recharge | Send &amp; Receive Money",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Finance",
					"id": "FINANCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/AMjT99Lt2UZL8tf_44F6ldSMrLOz4VCckz4Mt-Kr6Vcf880MBbWSHqNganyWHRPGZoE",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712827422162,
			"lastUpdateTime": 1718479601134,
			"packageName": "com.zenithBank.eazymoney"
		},
		{
			"name": "YouVersion Bible App + Audio",
			"description": "Daily Bible App with Audio, Verse of the Day, Offline, Bible Study + Devotionals",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Books & Reference",
					"id": "BOOKS_AND_REFERENCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/WS9mwjgQMTxX6WKLP7W1QcjQAjZKLp_h5ENE8MhucSiiN453_po6NW90wLL0c7lNaYw",
			"contentRating": "13+",
			"includesAds": false,
			"firstInstallTime": 1713124740289,
			"lastUpdateTime": 1718072286381,
			"packageName": "com.sirma.mobile.bible.android"
		},
		{
			"name": "Oxford Dictionary & Thesaurus",
			"description": "Improve your vocabulary and grammar with the 15 biggest Oxford Dictionaries.",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$0.99 - $39.99 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Books & Reference",
					"id": "BOOKS_AND_REFERENCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/rOcfgRhSpcAt1iIHj2xSVk7hXOeN5V5bTeLahPEXVtD4Oxp2xivs8kYlqujDJT3YrQ",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1713766548733,
			"lastUpdateTime": 1713766548733,
			"packageName": "com.mobisystems.msdict.embedded.wireless.oxford.dictionaryofenglish"
		},
		{
			"name": "Risevest: Invest in Dollars",
			"description": "Earn up to 15% or more investing in high-quality US assets",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Finance",
					"id": "FINANCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/mwcXYyA5rGRq393Kau_9U7IclAUzcikR5cZn_yhCYZlxjZFuyWibyM-3SQ2Y8AM4QL4",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1715308136035,
			"lastUpdateTime": 1715308136035,
			"packageName": "com.rise.mobile"
		},
		{
			"name": "Trust: Crypto & Bitcoin Wallet",
			"description": "Trust Wallet is a self-custody crypto wallet trusted by 130 million people.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Finance",
					"id": "FINANCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/cd5BevWohRqLwsI2_i3k4YIVtcO57cIZCs6l20H1Hcdj0P2rFEcX_7QtgKbTM3Sn_A",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712793989882,
			"lastUpdateTime": 1716660759842,
			"packageName": "com.wallet.crypto.trustapp"
		},
		{
			"name": "Google Drive",
			"description": "Store, access, and share securely with Google Drive, part of Google Workspace.",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$0.99 - $1,024.00 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Productivity",
					"id": "PRODUCTIVITY"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/t-juVwXA8lDAk8uQ2L6d6K83jpgQoqmK1icB_l9yvhIAQ2QT_1XbRwg5IpY08906qEw",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712794343297,
			"lastUpdateTime": 1715308729408,
			"packageName": "com.google.android.apps.docs"
		},
		{
			"name": "Zenith Bank eToken",
			"description": "e-Token is a mobile app used in the authentication of electronic transactions.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Business",
					"id": "BUSINESS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/AItluOAiZRW-ezN4kdz7f4hiK1vhLKpbiKYyepoBhQgH5T5V3v1u_s8irNvFKAR9R-o",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712828966532,
			"lastUpdateTime": 1712828966532,
			"packageName": "com.zenithbank.zenithetoken"
		},
		{
			"name": "Google Calendar",
			"description": "Always know what’s next with Google Calendar, part of Google Workspace.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Productivity",
					"id": "PRODUCTIVITY"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/_bh6XK3B7TAk7kBXC1GHC0j9eS9cw9wQo2K7fiP7FDGAQlcOqgUPT2lx3WgZ0JlOJh8",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1713769175139,
			"lastUpdateTime": 1715308693796,
			"packageName": "com.google.android.calendar"
		},
		{
			"name": "FCMB Mobile",
			"description": "The FCMB mobile app is all you need for all your financial services.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Finance",
					"id": "FINANCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/VDG7OwLnGU0pqEngDN8UrtYlLsQDsDHB9zTFtDjUgk85_qoELjishGAz-ig0agRg5FFI",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1713455694992,
			"lastUpdateTime": 1713455694992,
			"packageName": "com.appzonegroup.fcmb"
		},
		{
			"name": "Salad Africa",
			"description": "Financial wellness solutions for the improved lives of employees across Africa",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Finance",
					"id": "FINANCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/lBvK6XkufXHgwBE_ETDYeVVwVtF3qRAK-tIV4XfVb1NLqjvtl3yqfgTSlKu4n_m_grU",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712827366196,
			"lastUpdateTime": 1715312112346,
			"packageName": "com.salad.mobile"
		},
		{
			"name": "Slack",
			"description": "All your team communication in one place",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Business",
					"id": "BUSINESS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/mzJpTCsTW_FuR6YqOPaLHrSEVCSJuXzCljdxnCKhVZMcu6EESZBQTCHxMh8slVtnKqo",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712774076701,
			"lastUpdateTime": 1717195963525,
			"packageName": "com.Slack"
		},
		{
			"name": "Google Translate",
			"description": "The world is closer than ever with over 100 languages",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Tools",
					"id": "TOOLS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/ZrNeuKthBirZN7rrXPN1JmUbaG8ICy3kZSHt-WgSnREsJzo2txzCzjIoChlevMIQEA",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1715783473413,
			"lastUpdateTime": 1717195236003,
			"packageName": "com.google.android.apps.translate"
		},
		{
			"name": "Thunder VPN - Fast, Safe VPN",
			"description": "Lightning fast VPN, connect to the world in 1 second",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$1.99 - $59.99 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Tools",
					"id": "TOOLS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/cUYGDQ5PWqiCZufu3uV65ebqI0rzpi75mWnJnvFYL8WnYIM4Bk3ypLew6XHu2xLjDRw",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1722519394230,
			"lastUpdateTime": 1722519394230,
			"packageName": "com.fast.free.unblock.thunder.vpn"
		},
		{
			"name": "LinkedIn: Jobs & Business News",
			"description": "Make connections, begin your career journey, &amp; find the job that&#39;s right for you",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$7.49 - $839.88 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Business",
					"id": "BUSINESS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1712793254711,
			"lastUpdateTime": 1717195342640,
			"packageName": "com.linkedin.android"
		},
		{
			"name": "Xender - Share Music Transfer",
			"description": "Fast Share Tool! Share Music,Share Video,Share Photo,Status Saver, To MP3, MP3",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Tools",
					"id": "TOOLS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/y-jJBrUkvzwB2FsovKYjPl1TTIQ8eNl7__w3Waony71rjKqWmy1WxGZK47KuafZygQ",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1715116938523,
			"lastUpdateTime": 1715116938523,
			"packageName": "cn.xender"
		},
		{
			"name": "PiggyVest: Save & Invest Today",
			"description": "10% - 13% on savings &amp; up to 25% returns on investment (per annum).",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Finance",
					"id": "FINANCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/dqjM727ri-_8nhTBI9Do6o_iwlbWGcGsg6LazO5ksfHoUmOBzmrbaohbUSZv_uQjli0",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712793806634,
			"lastUpdateTime": 1712793806634,
			"packageName": "com.piggybankng.piggy"
		},
		{
			"name": "Status Saver・Status Downloader",
			"description": "Save video &amp; photo status, Keep status in gallery.",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$6.49 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Tools",
					"id": "TOOLS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/_Oek4zp26pnBzKaSh7qU2176AfMN3u-izrJ8KiwpL5tqiLWXJeY5QtR_9rCquLkR7A",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1722400752045,
			"lastUpdateTime": 1722400752045,
			"packageName": "savestatus.videodownloader.storysaver.statuskeeper"
		},
		{
			"name": "Status Saver - Save Status",
			"description": "Save video &amp; image status. Share &amp; repost easily.",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$3.99 - $13.99 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Tools",
					"id": "TOOLS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/awify5swDh88ejfj-cI9Da87zCEfQNQdnMpvNUayslc25hX1oX6mRG2YRbvFF-tU_-Q",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1720214040221,
			"lastUpdateTime": 1720214040221,
			"packageName": "statussaver.statusdownloader.videodownloader"
		},
		{
			"name": "CamScanner- scanner, PDF maker",
			"description": "Scan paperwork into PDF/JPG, generate your own e-signature and send fax or email",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$0.49 - $399.99 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Productivity",
					"id": "PRODUCTIVITY"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/eWYNxjXiub6-HqtwoS2d4bl-NkqcKgOHansSnXXqje8-K9XLRwflOgEYwSzPMicdAA",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1712793929717,
			"lastUpdateTime": 1715308047547,
			"packageName": "com.intsig.camscanner"
		},
		{
			"name": "UBA Mobile Banking",
			"description": "This is the official Mobile Banking App from United Bank for Africa",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Finance",
					"id": "FINANCE"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/m4zPg1g20NSiBe3tZbJOtumq9yUMkSrhuSeg1rTf3u1rLq8HieC1uR6y4FYXzApuj14",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712965904525,
			"lastUpdateTime": 1712965904525,
			"packageName": "com.uba.vericash"
		},
		{
			"name": "inDrive. Save on city rides",
			"description": "More than a taxi app! Save on city rides: Set the price &amp; get more as a driver!",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Maps & Navigation",
					"id": "MAPS_AND_NAVIGATION"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/za_-dri5h8T_Zwa6OiIPNCYCTOT7EgkE6Uj101qNOrGIKPNGsnpHb8YBysMnlX3pd6cT",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1715146926212,
			"lastUpdateTime": 1717195502123,
			"packageName": "sinet.startup.inDriver"
		},
		{
			"name": "Bolt: Request a Ride",
			"description": "Bolt is a ride-hailing app for requesting fast, safe, and affordable transport",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Maps & Navigation",
					"id": "MAPS_AND_NAVIGATION"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/TRCKh9Uk5mME5lVDZBAVmBMyBEiumHw4Ef9MTAnRqgcK8MEr4M8jqqBDGX_pKVBffpo",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712793179623,
			"lastUpdateTime": 1723392075389,
			"packageName": "ee.mtakso.client"
		},
		{
			"name": "Telegram",
			"description": "Telegram is a messaging app with a focus on speed and security.",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$0.31 - $289.99 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Communication",
					"id": "COMMUNICATION"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q",
			"contentRating": "17+",
			"includesAds": false,
			"firstInstallTime": 1717427620059,
			"lastUpdateTime": 1717427620059,
			"packageName": "org.telegram.messenger"
		},
		{
			"name": "WhatsApp Messenger",
			"description": "Simple. Reliable. Private.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Communication",
					"id": "COMMUNICATION"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712763870551,
			"lastUpdateTime": 1722501072537,
			"packageName": "com.whatsapp"
		},
		{
			"name": "Yahoo Mail – Organized Email",
			"description": "Get stuff done with Yahoo Mail. Works with Gmail &amp; Outlook email accounts.",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$0.99 - $9.99 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Communication",
					"id": "COMMUNICATION"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/YtGn2T9ADy5Hs4cKVoDgGb7fPuMkdXVcszVE1oiozfE4AxhDNq0RkwajYs1FxcrMDpw",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1712794710210,
			"lastUpdateTime": 1715309323069,
			"packageName": "com.yahoo.mobile.client.android.mail"
		},
		{
			"name": "Messenger",
			"description": "Free group video chat, video calls, voice calls and text messaging.",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$0.05 - $399.99 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Communication",
					"id": "COMMUNICATION"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712772799642,
			"lastUpdateTime": 1715309103145,
			"packageName": "com.facebook.orca"
		},
		{
			"name": "YouTube Music",
			"description": "The world of music dedicated to you",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "€0.05 - €940.00 if billed through Play",
			"currency": "EUR",
			"categories": [
				{
					"name": "Music & Audio",
					"id": "MUSIC_AND_AUDIO"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/GnYnNfKBr2nysHBYgYRCQtcv_RRNN0Sosn47F5ArKJu89DMR3_jHRAazoIVsPUoaMg",
			"contentRating": null,
			"includesAds": true,
			"firstInstallTime": 1712794778317,
			"lastUpdateTime": 1712794778317,
			"packageName": "com.google.android.music"
		},
		{
			"name": "VLC for Android",
			"description": "VLC for Android is the best open source video and music player, fast and easy!",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Video Players & Editors",
					"id": "VIDEO_PLAYERS"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/nPnJc260PPoupBe-DcVQ-MNr6149dphdEoEAN-C9xwgctpVXbwsuyon_jEZ3uPWWYQ",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1716647219183,
			"lastUpdateTime": 1716647219183,
			"packageName": "org.videolan.vlc"
		},
		{
			"name": "Google Photos",
			"description": "The home for your memories. Relive, share, and organize your photos.",
			"isPaid": false,
			"includesInAppPurchases": false,
			"InAppPurchasesPriceRange": "",
			"currency": "USD",
			"categories": [
				{
					"name": "Photography",
					"id": "PHOTOGRAPHY"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA",
			"contentRating": "0+",
			"includesAds": false,
			"firstInstallTime": 1712794442230,
			"lastUpdateTime": 1715308890091,
			"packageName": "com.google.android.apps.photos"
		},
		{
			"name": "PhotoGrid: Video Collage Maker",
			"description": "The all-in-one photo and video collage editor with the best AI remover tool.",
			"isPaid": false,
			"includesInAppPurchases": true,
			"InAppPurchasesPriceRange": "$0.99 - $33.99 per item",
			"currency": "USD",
			"categories": [
				{
					"name": "Photography",
					"id": "PHOTOGRAPHY"
				}
			],
			"icon": "https://play-lh.googleusercontent.com/Qeea3ZZ0SZOWyhUkkCRb1jmYwgnxyp6gOdjZOxZtNN73BmpFm7-p7Chwkrlew3Fy3Es",
			"contentRating": "0+",
			"includesAds": true,
			"firstInstallTime": 1712969376465,
			"lastUpdateTime": 1715309638039,
			"packageName": "com.photogrid.collage.videomaker"
		}
	],
	"unidentifiedUserApps": [
		{
			"category": "other",
			"firstInstallTime": 1720210714868,
			"lastUpdateTime": 1720210714868,
			"name": "Football Score Live TV",
			"packageName": "com.footballlivetvbilal.livefootballmatches.livefootballtvstreaming.soccerhd3rdapp",
			"system": false
		},
		{
			"category": "other",
			"firstInstallTime": 1723649158783,
			"lastUpdateTime": 1723649158783,
			"name": "Fumiwo Integration Sample",
			"packageName": "io.fumiwo.integration_sample",
			"system": false
		},
		{
			"category": "other",
			"firstInstallTime": 1720211642432,
			"lastUpdateTime": 1720211642432,
			"name": "Live Sports TV Football",
			"packageName": "com.sanasportsinc.live.sports.football",
			"system": false
		},
		{
			"category": "other",
			"firstInstallTime": 1714237268251,
			"lastUpdateTime": 1714237268251,
			"name": "Live Football TV",
			"packageName": "com.ptvsports.livesoccer.footballtv",
			"system": false
		},
		{
			"category": "other",
			"firstInstallTime": 1713208521063,
			"lastUpdateTime": 1713208521063,
			"name": "Sports Football Live TV HD",
			"packageName": "com.cricketipp.nonstop.streaming",
			"system": false
		},
		{
			"category": "other",
			"firstInstallTime": 1718648927036,
			"lastUpdateTime": 1718648927036,
			"name": "VidMate",
			"packageName": "com.video.fun.app",
			"system": false
		},
		{
			"category": "video",
			"firstInstallTime": 1714267989272,
			"lastUpdateTime": 1714267989272,
			"name": "MovieBox",
			"packageName": "com.community.moviebox",
			"system": false
		},
		{
			"category": "productivity",
			"firstInstallTime": 1715900517463,
			"lastUpdateTime": 1717139975928,
			"name": "EaseMoni",
			"packageName": "com.loan.cash.credit.easemoni.nigeria",
			"system": false
		},
		{
			"category": "productivity",
			"firstInstallTime": 1713177016779,
			"lastUpdateTime": 1718479632112,
			"name": "Branch",
			"packageName": "com.branch_international.branch.branch_demo_android",
			"system": false
		},
		{
			"category": "productivity",
			"firstInstallTime": 1717192964732,
			"lastUpdateTime": 1717192964732,
			"name": "Aella",
			"packageName": "com.aella.comportal",
			"system": false
		},
		{
			"category": "productivity",
			"firstInstallTime": 1717182937693,
			"lastUpdateTime": 1723469732660,
			"name": "Renmoney",
			"packageName": "com.renmoney.android",
			"system": false
		},
		{
			"category": "productivity",
			"firstInstallTime": 1712969084051,
			"lastUpdateTime": 1718479531130,
			"name": "QuickCheck",
			"packageName": "io.quickcheck.loans",
			"system": false
		},
		{
			"category": "productivity",
			"firstInstallTime": 1717182742720,
			"lastUpdateTime": 1717182742720,
			"name": "Palmcredit",
			"packageName": "com.transsnetfinancial.palmcredit",
			"system": false
		},
		{
			"category": "productivity",
			"firstInstallTime": 1712828110778,
			"lastUpdateTime": 1722537979611,
			"name": "FairMoney",
			"packageName": "ng.com.fairmoney.fairmoney",
			"system": false
		},
		{
			"category": "productivity",
			"firstInstallTime": 1712961966556,
			"lastUpdateTime": 1717194143794,
			"name": "Carbon",
			"packageName": "com.lenddo.mobile.paylater",
			"system": false
		},
		{
			"category": "productivity",
			"firstInstallTime": 1716659856925,
			"lastUpdateTime": 1716659856925,
			"name": "OKash",
			"packageName": "com.loan.cash.credit.okash.nigeria",
			"system": false
		}
	],
	"userAppsPerCategory": {
		"shopping": [
			{
				"name": "CDcare",
				"description": "CDcare Marketplace lets Africans buy  appliances &amp; pay in installments.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Shopping",
						"id": "SHOPPING"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/nCmgmni6WI64Yn_XgKwwkUGuiRabN-Y4mWoIta_pFsA9uIpwdwxwOUySLLjIUyhGWg",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1716849539472,
				"lastUpdateTime": 1716849539472,
				"packageName": "com.nipek.cdcare"
			},
			{
				"name": "Jiji Nigeria: Buy&Sell Online",
				"description": "Buy &amp; Sell Anything in Nigeria",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Shopping",
						"id": "SHOPPING"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/a7zExJW7nVh-HkP0J10vL8odsBYj1Wq6ctD25suqaSxkocdB1FkJtbclxdiSMRKYJ20",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1714062666032,
				"lastUpdateTime": 1715308929462,
				"packageName": "ng.jiji.app"
			},
			{
				"name": "JUMIA Online Shopping",
				"description": "Get ready for big deals, with Jumia 🛒, you always win!",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Shopping",
						"id": "SHOPPING"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/K02ShY9ODJ9xGxXVqYKbDUOXczHHdKUnE9YRyurDdPkXe_THCWy-Fpo417seGIsMchA",
				"contentRating": "13+",
				"includesAds": true,
				"firstInstallTime": 1712793445475,
				"lastUpdateTime": 1717195628029,
				"packageName": "com.jumia.android"
			},
			{
				"name": "NHPay",
				"description": "Make Secure your Payments with NH Pay App",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Shopping",
						"id": "SHOPPING"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/LKtMq_HZm2MobjwN83A0eNp2LRgkgAcBZPVraPYOdY8PLu3Jq-36XBdCUH3KcY8ieDU",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1713773841652,
				"lastUpdateTime": 1713773841652,
				"packageName": "io.peppa.nhi"
			},
			{
				"name": "Peppa: Buy & Sell Securely",
				"description": "Buy safely &amp; sell securely with escrow &amp; other features online. 🛒🔒",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Shopping",
						"id": "SHOPPING"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/3XBH5scF1fktJhoen-4qVw4XRulP3D9lDtXjR3eiuG0_A5wtcEtykawPsDCk7Rf5efVi",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712962045376,
				"lastUpdateTime": 1721117815946,
				"packageName": "com.paysure.peppa"
			}
		],
		"tools": [
			{
				"name": "Samsung Voice Recorder",
				"description": "- Voice recorder for Samsung Galaxy series",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Tools",
						"id": "TOOLS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/EaHQ7KJNn6ZAICf0kEVwKunD4hZd-59oggNErDPDKTaK20sXXfVUN0AYJP70-x8UjQ",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712781613514,
				"lastUpdateTime": 1712781613514,
				"packageName": "com.sec.android.app.voicenote"
			},
			{
				"name": "Samsung Calculator",
				"description": "This app provides the four fundamental operations and engineering calculations.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Tools",
						"id": "TOOLS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/Z5BA3DYVKalnbCW8CGlIM3bN699i6QwRs5oE5kr_1-OYApm2cLPSlOP6mbdUJunXtw",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712781583649,
				"lastUpdateTime": 1712781583649,
				"packageName": "com.sec.android.app.popupcalculator"
			},
			{
				"name": "Samsung Members",
				"description": "Expert support, community connection\n&amp; exclusive perks.\nPossibility starts here.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Tools",
						"id": "TOOLS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/5MlRrSa9Wm47Ig9kd9mDD9J3ekq_Pj1LXqeEJ3korTCsrc2d68HBWJYNYs6_p_fMBw",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712781541168,
				"lastUpdateTime": 1712781541168,
				"packageName": "com.samsung.android.voc"
			},
			{
				"name": "Status Saver・Status Downloader",
				"description": "Simple and intuitive Status Saver app. Save favorite status updates - status app",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$0.99 - $99.99 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Tools",
						"id": "TOOLS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/lEdwAmDVnW2rmeS2A96ngRfB_1PsJyBMOdkd_YlHaqTNF4haMULv45N6qzwkvdccHQ",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1713738280473,
				"lastUpdateTime": 1713738280473,
				"packageName": "com.falnesc.statussaver"
			},
			{
				"name": "Google Translate",
				"description": "The world is closer than ever with over 100 languages",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Tools",
						"id": "TOOLS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/ZrNeuKthBirZN7rrXPN1JmUbaG8ICy3kZSHt-WgSnREsJzo2txzCzjIoChlevMIQEA",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1715783473413,
				"lastUpdateTime": 1717195236003,
				"packageName": "com.google.android.apps.translate"
			},
			{
				"name": "Thunder VPN - Fast, Safe VPN",
				"description": "Lightning fast VPN, connect to the world in 1 second",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$1.99 - $59.99 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Tools",
						"id": "TOOLS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/cUYGDQ5PWqiCZufu3uV65ebqI0rzpi75mWnJnvFYL8WnYIM4Bk3ypLew6XHu2xLjDRw",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1722519394230,
				"lastUpdateTime": 1722519394230,
				"packageName": "com.fast.free.unblock.thunder.vpn"
			},
			{
				"name": "Xender - Share Music Transfer",
				"description": "Fast Share Tool! Share Music,Share Video,Share Photo,Status Saver, To MP3, MP3",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Tools",
						"id": "TOOLS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/y-jJBrUkvzwB2FsovKYjPl1TTIQ8eNl7__w3Waony71rjKqWmy1WxGZK47KuafZygQ",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1715116938523,
				"lastUpdateTime": 1715116938523,
				"packageName": "cn.xender"
			},
			{
				"name": "Status Saver・Status Downloader",
				"description": "Save video &amp; photo status, Keep status in gallery.",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$6.49 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Tools",
						"id": "TOOLS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/_Oek4zp26pnBzKaSh7qU2176AfMN3u-izrJ8KiwpL5tqiLWXJeY5QtR_9rCquLkR7A",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1722400752045,
				"lastUpdateTime": 1722400752045,
				"packageName": "savestatus.videodownloader.storysaver.statuskeeper"
			},
			{
				"name": "Status Saver - Save Status",
				"description": "Save video &amp; image status. Share &amp; repost easily.",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$3.99 - $13.99 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Tools",
						"id": "TOOLS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/awify5swDh88ejfj-cI9Da87zCEfQNQdnMpvNUayslc25hX1oX6mRG2YRbvFF-tU_-Q",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1720214040221,
				"lastUpdateTime": 1720214040221,
				"packageName": "statussaver.statusdownloader.videodownloader"
			}
		],
		"education": [
			{
				"name": "Duolingo: Language Lessons",
				"description": "Learn Spanish, French, German, Italian, English and more languages for free.",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$0.99 - $239.99 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Education",
						"id": "EDUCATION"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/rIY2-S9PdrIac8VisSHWgQZvjTO6GurVDwKSXG68rILtRas1cexV_EJ8426y1Bvvkg",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1720363790449,
				"lastUpdateTime": 1720363790449,
				"packageName": "com.duolingo"
			}
		],
		"music_and_audio": [
			{
				"name": "Samsung Music",
				"description": "- Music player for Samsung Galaxy series- Supports for Android",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Music & Audio",
						"id": "MUSIC_AND_AUDIO"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/olj6n0kCUo_x3lNfgvzdGR5k_NEsz2D9PuC8evI0hYCHLSQHBhKY-cQwZ4EtWnac28o",
				"contentRating": "13+",
				"includesAds": true,
				"firstInstallTime": 1712949404981,
				"lastUpdateTime": 1712949404981,
				"packageName": "com.sec.android.app.music"
			},
			{
				"name": "YouTube Music",
				"description": "The world of music dedicated to you",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "€0.05 - €940.00 if billed through Play",
				"currency": "EUR",
				"categories": [
					{
						"name": "Music & Audio",
						"id": "MUSIC_AND_AUDIO"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/GnYnNfKBr2nysHBYgYRCQtcv_RRNN0Sosn47F5ArKJu89DMR3_jHRAazoIVsPUoaMg",
				"contentRating": null,
				"includesAds": true,
				"firstInstallTime": 1712794778317,
				"lastUpdateTime": 1712794778317,
				"packageName": "com.google.android.music"
			}
		],
		"sports": [
			{
				"name": "SportyBet - Sports Betting App",
				"description": "Watch and bet on the best sports events with Nigeria's premier bookmaker.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Sports",
						"id": "SPORTS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/JYHZmo4I9xbALXJD7XCEtWxAz7sHc2Bw-Ij1J-HqryjZfgfuKpap_D1kOS9lt32iKU4",
				"contentRating": null,
				"includesAds": false,
				"firstInstallTime": 1712765098244,
				"lastUpdateTime": 1717196039186,
				"packageName": "com.sportybet.android.gp"
			},
			{
				"name": "Chelsea FC - The 5th Stand",
				"description": "Welcome to Chelsea FC's Official App",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$1.49 - $7.49 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Sports",
						"id": "SPORTS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/nPMQvWjcZtG8XCYDLAT4s1j4BRq-JQ5gqGHRPHi8QAXsRvNVgY-j-eTfbfmUIGvxMw",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1713208699068,
				"lastUpdateTime": 1721849396371,
				"packageName": "com.chelseafc.the5thstand"
			}
		],
		"communication": [
			{
				"name": "Samsung Internet Browser",
				"description": "The secure, private and optimized mobile web browser from Samsung",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Communication",
						"id": "COMMUNICATION"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/wFAmWrV_t9YT75C6Vbyl1UupslTlq_lm7AcEPamSvWbqumIqKYfTpV_Ro_iC0fAjAQU",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712778349389,
				"lastUpdateTime": 1712778349389,
				"packageName": "com.sec.android.app.sbrowser"
			},
			{
				"name": "Telegram",
				"description": "Telegram is a messaging app with a focus on speed and security.",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$0.31 - $289.99 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Communication",
						"id": "COMMUNICATION"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q",
				"contentRating": "17+",
				"includesAds": false,
				"firstInstallTime": 1717427620059,
				"lastUpdateTime": 1717427620059,
				"packageName": "org.telegram.messenger"
			},
			{
				"name": "WhatsApp Messenger",
				"description": "Simple. Reliable. Private.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Communication",
						"id": "COMMUNICATION"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712763870551,
				"lastUpdateTime": 1722501072537,
				"packageName": "com.whatsapp"
			},
			{
				"name": "Yahoo Mail – Organized Email",
				"description": "Get stuff done with Yahoo Mail. Works with Gmail &amp; Outlook email accounts.",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$0.99 - $9.99 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Communication",
						"id": "COMMUNICATION"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/YtGn2T9ADy5Hs4cKVoDgGb7fPuMkdXVcszVE1oiozfE4AxhDNq0RkwajYs1FxcrMDpw",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1712794710210,
				"lastUpdateTime": 1715309323069,
				"packageName": "com.yahoo.mobile.client.android.mail"
			},
			{
				"name": "Messenger",
				"description": "Free group video chat, video calls, voice calls and text messaging.",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$0.05 - $399.99 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Communication",
						"id": "COMMUNICATION"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712772799642,
				"lastUpdateTime": 1715309103145,
				"packageName": "com.facebook.orca"
			}
		],
		"productivity": [
			{
				"name": "Samsung Notes",
				"description": "Samsung Notes can create and edit documents and collaborate with others",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Productivity",
						"id": "PRODUCTIVITY"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/YtLBM6IPz0ZWno6QCLJVqASU0E8OLFmxd-eepUSpAEmFIQzZrq7to1VJ20s-A5iMFA",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712781341572,
				"lastUpdateTime": 1712781341572,
				"packageName": "com.samsung.android.app.notes"
			},
			{
				"name": "Zoho Mail - Email and Calendar",
				"description": "Zoho Mail - Email, Calendar, Contacts and Files on the move!",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Productivity",
						"id": "PRODUCTIVITY"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/9AjFvEP6RP6zRd41Z9cuiyHe_qD47a1AN0QrvW9Ec0OfsmG9x-t09nmTQMAmmZuYrdso",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712794751863,
				"lastUpdateTime": 1715309694248,
				"packageName": "com.zoho.mail"
			},
			{
				"name": "Zoho Calendar",
				"description": "Online business calendar to manage your schedules and events collaboratively.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Productivity",
						"id": "PRODUCTIVITY"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/CeUq4-SKxGOczKF6v8pKvUns-12YHrztRF-rE4Avp_E84L7CpcSiRGEHgWdqd0GO1g",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1717415796157,
				"lastUpdateTime": 1717415796157,
				"packageName": "com.zoho.android.calendar"
			},
			{
				"name": "Google Drive",
				"description": "Store, access, and share securely with Google Drive, part of Google Workspace.",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$0.99 - $1,024.00 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Productivity",
						"id": "PRODUCTIVITY"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/t-juVwXA8lDAk8uQ2L6d6K83jpgQoqmK1icB_l9yvhIAQ2QT_1XbRwg5IpY08906qEw",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712794343297,
				"lastUpdateTime": 1715308729408,
				"packageName": "com.google.android.apps.docs"
			},
			{
				"name": "Google Calendar",
				"description": "Always know what’s next with Google Calendar, part of Google Workspace.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Productivity",
						"id": "PRODUCTIVITY"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/_bh6XK3B7TAk7kBXC1GHC0j9eS9cw9wQo2K7fiP7FDGAQlcOqgUPT2lx3WgZ0JlOJh8",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1713769175139,
				"lastUpdateTime": 1715308693796,
				"packageName": "com.google.android.calendar"
			},
			{
				"name": "CamScanner- scanner, PDF maker",
				"description": "Scan paperwork into PDF/JPG, generate your own e-signature and send fax or email",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$0.49 - $399.99 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Productivity",
						"id": "PRODUCTIVITY"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/eWYNxjXiub6-HqtwoS2d4bl-NkqcKgOHansSnXXqje8-K9XLRwflOgEYwSzPMicdAA",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1712793929717,
				"lastUpdateTime": 1715308047547,
				"packageName": "com.intsig.camscanner"
			}
		],
		"art_and_design": [
			{
				"name": "Figma – prototype mirror share",
				"description": "View your designs and collaborate on the go",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Art & Design",
						"id": "ART_AND_DESIGN"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/efwNlvQ3pch_-hZ9xeHf6YF-f_rHzQQo21IVevPLOxpzSVfxuVKom2_7C6axFbC-3rU",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712963692724,
				"lastUpdateTime": 1718479884029,
				"packageName": "com.figma.mirror"
			}
		],
		"video_players": [
			{
				"name": "Screen Recorder - XRecorder",
				"description": "Screen recorder with audio to take live videos&amp; Screenshot in high quality!",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$5.99 - $49.99 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Video Players & Editors",
						"id": "VIDEO_PLAYERS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/RX8RBGnnxFgncaU649msEAdLpQmXiSlzAZrjOtdSnvyptB16wWlQNFdRrMWNSdkIQ2tn",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1712969445857,
				"lastUpdateTime": 1715309594141,
				"packageName": "videoeditor.videorecorder.screenrecorder"
			},
			{
				"name": "VLC for Android",
				"description": "VLC for Android is the best open source video and music player, fast and easy!",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Video Players & Editors",
						"id": "VIDEO_PLAYERS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/nPnJc260PPoupBe-DcVQ-MNr6149dphdEoEAN-C9xwgctpVXbwsuyon_jEZ3uPWWYQ",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1716647219183,
				"lastUpdateTime": 1716647219183,
				"packageName": "org.videolan.vlc"
			}
		],
		"finance": [
			{
				"name": "Cowrywise: Save & invest money",
				"description": "The only SEC-licensed wealth management app you really need. Plan, save &amp; invest",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Finance",
						"id": "FINANCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/kkgvkSlfdTFZK2CPuPfypGGdD7jjw9M_UCJn6fvre6txp-HeqNWkU0xWODaec-9gXg",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712969000860,
				"lastUpdateTime": 1717194300857,
				"packageName": "com.cowrywise.android"
			},
			{
				"name": "Kuda - Transfers and payments",
				"description": "Pay your bills, make unlimited cashless payments and save money with interest.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Finance",
						"id": "FINANCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/C7ojJSQlm0ae8xRxH7kiET-PxIHSZfk2BQ8-ipu0H7EiUnIcgpgDmHLVfZyIEj7wzxrY",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712793354819,
				"lastUpdateTime": 1719995826274,
				"packageName": "com.kudabank.app"
			},
			{
				"name": "GTWorld",
				"description": "A Mobile Banking App that is designed to cater to all that's important to you.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Finance",
						"id": "FINANCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/ORpKPnpcVp6uKb9mSzUsAG60pKheK5F1WpwaoXnTdhE7d_gPH053e-Xr2rg0s_zcGkQ",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1714664893997,
				"lastUpdateTime": 1714664893997,
				"packageName": "com.gtbank.gtworldv1"
			},
			{
				"name": "Fundall - Bank, Invest & Plan",
				"description": "Save, invest, make online payments, get insurance, see spending insights &amp; more.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Finance",
						"id": "FINANCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/5ojgoNbiZWQBBN79kACGLr2e3qLRwTWL-XfVVygy1yX8b6k-NSeajnO73FABlG_doYE",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1717189528354,
				"lastUpdateTime": 1717189528354,
				"packageName": "com.fundall.io"
			},
			{
				"name": "Zenith Bank Mobile App",
				"description": "Pay Bills | Airtime Recharge | Send &amp; Receive Money",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Finance",
						"id": "FINANCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/AMjT99Lt2UZL8tf_44F6ldSMrLOz4VCckz4Mt-Kr6Vcf880MBbWSHqNganyWHRPGZoE",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712827422162,
				"lastUpdateTime": 1718479601134,
				"packageName": "com.zenithBank.eazymoney"
			},
			{
				"name": "Risevest: Invest in Dollars",
				"description": "Earn up to 15% or more investing in high-quality US assets",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Finance",
						"id": "FINANCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/mwcXYyA5rGRq393Kau_9U7IclAUzcikR5cZn_yhCYZlxjZFuyWibyM-3SQ2Y8AM4QL4",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1715308136035,
				"lastUpdateTime": 1715308136035,
				"packageName": "com.rise.mobile"
			},
			{
				"name": "Trust: Crypto & Bitcoin Wallet",
				"description": "Trust Wallet is a self-custody crypto wallet trusted by 130 million people.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Finance",
						"id": "FINANCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/cd5BevWohRqLwsI2_i3k4YIVtcO57cIZCs6l20H1Hcdj0P2rFEcX_7QtgKbTM3Sn_A",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712793989882,
				"lastUpdateTime": 1716660759842,
				"packageName": "com.wallet.crypto.trustapp"
			},
			{
				"name": "FCMB Mobile",
				"description": "The FCMB mobile app is all you need for all your financial services.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Finance",
						"id": "FINANCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/VDG7OwLnGU0pqEngDN8UrtYlLsQDsDHB9zTFtDjUgk85_qoELjishGAz-ig0agRg5FFI",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1713455694992,
				"lastUpdateTime": 1713455694992,
				"packageName": "com.appzonegroup.fcmb"
			},
			{
				"name": "Salad Africa",
				"description": "Financial wellness solutions for the improved lives of employees across Africa",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Finance",
						"id": "FINANCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/lBvK6XkufXHgwBE_ETDYeVVwVtF3qRAK-tIV4XfVb1NLqjvtl3yqfgTSlKu4n_m_grU",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712827366196,
				"lastUpdateTime": 1715312112346,
				"packageName": "com.salad.mobile"
			},
			{
				"name": "PiggyVest: Save & Invest Today",
				"description": "10% - 13% on savings &amp; up to 25% returns on investment (per annum).",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Finance",
						"id": "FINANCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/dqjM727ri-_8nhTBI9Do6o_iwlbWGcGsg6LazO5ksfHoUmOBzmrbaohbUSZv_uQjli0",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712793806634,
				"lastUpdateTime": 1712793806634,
				"packageName": "com.piggybankng.piggy"
			},
			{
				"name": "UBA Mobile Banking",
				"description": "This is the official Mobile Banking App from United Bank for Africa",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Finance",
						"id": "FINANCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/m4zPg1g20NSiBe3tZbJOtumq9yUMkSrhuSeg1rTf3u1rLq8HieC1uR6y4FYXzApuj14",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712965904525,
				"lastUpdateTime": 1712965904525,
				"packageName": "com.uba.vericash"
			}
		],
		"business": [
			{
				"name": "Zoho Meeting - Online Meetings",
				"description": "Join online meetings &amp; webinars with real-time audio, video, and screen sharing",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Business",
						"id": "BUSINESS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/ugEiB2IKOedG8gEE5HtJboLAUNcy3Vgc4T0TJJec4-0RT_jGuBdlGkArgFG_Vj-hNo4",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1717760868101,
				"lastUpdateTime": 1717760868101,
				"packageName": "com.zoho.meeting"
			},
			{
				"name": "Zenith Bank eToken",
				"description": "e-Token is a mobile app used in the authentication of electronic transactions.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Business",
						"id": "BUSINESS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/AItluOAiZRW-ezN4kdz7f4hiK1vhLKpbiKYyepoBhQgH5T5V3v1u_s8irNvFKAR9R-o",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712828966532,
				"lastUpdateTime": 1712828966532,
				"packageName": "com.zenithbank.zenithetoken"
			},
			{
				"name": "Slack",
				"description": "All your team communication in one place",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Business",
						"id": "BUSINESS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/mzJpTCsTW_FuR6YqOPaLHrSEVCSJuXzCljdxnCKhVZMcu6EESZBQTCHxMh8slVtnKqo",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712774076701,
				"lastUpdateTime": 1717195963525,
				"packageName": "com.Slack"
			},
			{
				"name": "LinkedIn: Jobs & Business News",
				"description": "Make connections, begin your career journey, &amp; find the job that&#39;s right for you",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$7.49 - $839.88 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Business",
						"id": "BUSINESS"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1712793254711,
				"lastUpdateTime": 1717195342640,
				"packageName": "com.linkedin.android"
			}
		],
		"books_and_reference": [
			{
				"name": "YouVersion Bible App + Audio",
				"description": "Daily Bible App with Audio, Verse of the Day, Offline, Bible Study + Devotionals",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Books & Reference",
						"id": "BOOKS_AND_REFERENCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/WS9mwjgQMTxX6WKLP7W1QcjQAjZKLp_h5ENE8MhucSiiN453_po6NW90wLL0c7lNaYw",
				"contentRating": "13+",
				"includesAds": false,
				"firstInstallTime": 1713124740289,
				"lastUpdateTime": 1718072286381,
				"packageName": "com.sirma.mobile.bible.android"
			},
			{
				"name": "Oxford Dictionary & Thesaurus",
				"description": "Improve your vocabulary and grammar with the 15 biggest Oxford Dictionaries.",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$0.99 - $39.99 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Books & Reference",
						"id": "BOOKS_AND_REFERENCE"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/rOcfgRhSpcAt1iIHj2xSVk7hXOeN5V5bTeLahPEXVtD4Oxp2xivs8kYlqujDJT3YrQ",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1713766548733,
				"lastUpdateTime": 1713766548733,
				"packageName": "com.mobisystems.msdict.embedded.wireless.oxford.dictionaryofenglish"
			}
		],
		"maps_and_navigation": [
			{
				"name": "inDrive. Save on city rides",
				"description": "More than a taxi app! Save on city rides: Set the price &amp; get more as a driver!",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Maps & Navigation",
						"id": "MAPS_AND_NAVIGATION"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/za_-dri5h8T_Zwa6OiIPNCYCTOT7EgkE6Uj101qNOrGIKPNGsnpHb8YBysMnlX3pd6cT",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1715146926212,
				"lastUpdateTime": 1717195502123,
				"packageName": "sinet.startup.inDriver"
			},
			{
				"name": "Bolt: Request a Ride",
				"description": "Bolt is a ride-hailing app for requesting fast, safe, and affordable transport",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Maps & Navigation",
						"id": "MAPS_AND_NAVIGATION"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/TRCKh9Uk5mME5lVDZBAVmBMyBEiumHw4Ef9MTAnRqgcK8MEr4M8jqqBDGX_pKVBffpo",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712793179623,
				"lastUpdateTime": 1723392075389,
				"packageName": "ee.mtakso.client"
			}
		],
		"photography": [
			{
				"name": "Google Photos",
				"description": "The home for your memories. Relive, share, and organize your photos.",
				"isPaid": false,
				"includesInAppPurchases": false,
				"InAppPurchasesPriceRange": "",
				"currency": "USD",
				"categories": [
					{
						"name": "Photography",
						"id": "PHOTOGRAPHY"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA",
				"contentRating": "0+",
				"includesAds": false,
				"firstInstallTime": 1712794442230,
				"lastUpdateTime": 1715308890091,
				"packageName": "com.google.android.apps.photos"
			},
			{
				"name": "PhotoGrid: Video Collage Maker",
				"description": "The all-in-one photo and video collage editor with the best AI remover tool.",
				"isPaid": false,
				"includesInAppPurchases": true,
				"InAppPurchasesPriceRange": "$0.99 - $33.99 per item",
				"currency": "USD",
				"categories": [
					{
						"name": "Photography",
						"id": "PHOTOGRAPHY"
					}
				],
				"icon": "https://play-lh.googleusercontent.com/Qeea3ZZ0SZOWyhUkkCRb1jmYwgnxyp6gOdjZOxZtNN73BmpFm7-p7Chwkrlew3Fy3Es",
				"contentRating": "0+",
				"includesAds": true,
				"firstInstallTime": 1712969376465,
				"lastUpdateTime": 1715309638039,
				"packageName": "com.photogrid.collage.videomaker"
			}
		]
	},
	"metadata": {
		"deviceAgeSinceFirstAppInstallByUser": 139,
		"totalApps": 392,
		"totalSystemApps": 338,
		"totalUserApps": 54,
		"totalAppsInstalledInThelast30Days": 2,
		"totalAppsInstalledInThelast3Months": 9,
		"totalAppsInstalledInThelast6Months": 54,
		"totalAppsInstalledInThelast12Months": 54,
		"totalPaidApps": 0,
		"totalFreeApps": 54,
		"totalAppsWithIAP": 16,
		"totalAppsWithAds": 18,
		"contentRating0+": 48,
		"contentRating10+": 0,
		"contentRating13+": 3,
		"contentRating17+": 1,
		"contentRating18+": 0,
		"appsCountPerCategory": {
			"shopping": 5,
			"tools": 9,
			"education": 1,
			"music_and_audio": 2,
			"sports": 2,
			"communication": 5,
			"productivity": 6,
			"art_and_design": 1,
			"video_players": 2,
			"finance": 11,
			"business": 4,
			"books_and_reference": 2,
			"maps_and_navigation": 2,
			"photography": 2
		},
		"appClonerFlag": false,
		"anonymousMessengerFlag": false,
		"callCenterFlag": false,
		"torBrowserFlag": false,
		"tempEmailFlag": false,
		"vpnFlag": false,
		"locationSpoofingFlag": false,
		"appHiderFlag": false,
		"virtualAndroidFlag": false,
		"deviceIdChangerFlag": false,
		"vpn": true,
		"anonymousMessenger": true
	}
}

export const testrrrr = {
	"sdkVersion": "1.3",
	"permissions": [
		{
			"a": "android.permission.READ_EXTERNAL_STORAGE",
			"b": true
		}
	],
	"analyzedData": {
		"appInfo": appInfo,
		"deviceInfo": {
			"accessibilityEnabled": false,
			"adbEnabled": false,
			"androidId": null,
			"batteryCharging": true,
			"batteryRemaining": 5,
			"bluetoothEnabled": false,
			"board": "msm8953",
			"brand": "samsung",
			"cpuType": "arm64-v8a",
			"dataRoamingEnabled": false,
			"developerModeEnabled": false,
			"device": "a20s",
			"displayLanguage": "English",
			"emulatorName": null,
			"externalStorageFree": 678703104,
			"externalStorageTotal": 24283340800,
			"fingerprintEnrolled": true,
			"hardware": "qcom",
			"ipAddress": "197.210.85.225",
			"language": "en",
			"locationEnabled": true,
			"mainStorageFree": 699674624,
			"mainStorageTotal": 24304312320,
			"manufacturer": "samsung",
			"model": "SM-A207F",
			"networkCountryIso": "ng",
			"networkOperator": "62120",
			"networkOperatorName": "Airtel Nigeria",
			"nextAlarmTime": 1723708800000,
			"operator": "62130",
			"operatorName": "Airtel NG",
			"phoneType": "gsm",
			"product": "a20sxx",
			"productionYear": 1685960600000,
			"rootedDevice": false,
			"screenHeight": 1560,
			"screenWidth": 720,
			"sdkVersion": 30,
			"serialNumber": null,
			"simCountryIso": "ng",
			"timeZone": "Africa/Lagos",
			"usbMassStorageEnabled": false,
			"useProxy": false,
			"useVpn": false,
			"wifiEnabled": false,
			"networkConnectionType": null,
			"ramTotalSize": 2925928448,
			"osVersion": "11",
			"isVirtual": false,
			"isStanding": false,
			"isAngled": false,
			"isLying": false
		},
		"ipInfo": {
			"ip": "197.210.85.225",
			"isEu": false,
			"city": "Port Harcourt",
			"region": "Rivers",
			"regionCode": "RI",
			"regionType": "state",
			"countryName": "Nigeria",
			"countryCode": "NG",
			"continentName": "Africa",
			"continentCode": "AF",
			"latitude": 4.773099899291992,
			"longitude": 7.008500099182129,
			"postal": null,
			"callingCode": "234",
			"flag": "https://ipdata.co/flags/ng.png",
			"emojiFlag": "🇳🇬",
			"emojiUnicode": "U+1F1F3 U+1F1EC",
			"asn": {
				"asn": "AS29465",
				"name": "MTN Nigeria Communication Limited",
				"domain": null,
				"route": "197.210.85.0/24",
				"type": "business"
			},
			"carrier": {
				"name": "MTN",
				"mcc": "621",
				"mnc": "30"
			},
			"languages": {
				"0": {
					"name": "English",
					"native": "English",
					"code": "en"
				}
			},
			"currency": {
				"name": "Nigerian Naira",
				"code": "NGN",
				"symbol": "₦",
				"native": "₦",
				"plural": "Nigerian nairas"
			},
			"timeZone": {
				"name": "Africa/Lagos",
				"abbr": "WAT",
				"offset": "+0100",
				"isDst": false,
				"currentTime": "2024-08-27T16:37:32+01:00"
			},
			"threat": {
				"isTor": false,
				"isIcloudRelay": false,
				"isProxy": false,
				"isDatacenter": false,
				"isAnonymous": false,
				"isKnownAttacker": false,
				"isKnownAbuser": false,
				"isThreat": false,
				"isBogon": false
			},
			"count": "6",
			"status": 200
		},

		"locationInfo": null,
		"audioInfo": {
			"totalAudioCount": 14,
			"totalMusicCount": 1,
			"totalAlarmCount": 0,
			"totalAudioBookCount": 0,
			"totalAudioPodcastCount": 0,
			"totalAudioRecordingCount": 0,
			"totalAudioRingToneCount": 0
		},
		"calendarInfo": {
			"totalPastEvents": 168,
			"totalCalendarEvents": 195,
			"totalOrganizedCalendarEvents": 193,
			"totalConfirmedCalendarEvents": 184,
			"totalWeekdayCalendarEvents": 137,
			"totalCalendarEventsWithMoreThanOneAttendee": 2,
			"totalCalendarEventsInDifferentTimeZone": 17,
			"totalCalendarEventsInLast30Days": 2,
			"totalEventsInNext30Days": 2,
			"totalRepetitiveCalendarEventsInLast30Days": 0,
			"totalWeekdayCalendarEventsInLast30Days": 2
		},
		"contactInfo": {
			"totalContacts": 539,
			"totalContactsWithoutAnyPhoneNumber": 3,
			"totalContactsWithMultiplePhoneNumbers": 101,
			"totalContactsMarkedAsFavorites": 0,
			"totalContactsWithAssociatedPicture": 3,
			"totalContactsWithSpecialRingtone": 0,
			"totalPhoneNumbers": 642,
			"totalPhoneNumbersMobile": 626,
			"totalPhoneNumbersWork": 0,
			"totalPhoneNumbersHome": 9,
			"totalPhoneNumbersOther": 7
		},
		"imageInfo": {
			"totalImages": 920,
			"totalImagesWithLocationProperty": 920,
			"mostFrequentImageResolution": "591x1280",
			"totalImagesCreatedInLast30Days": 88,
			"totalImagesCreatedInLast360Days": 920,
			"firstMonthWithMoreThan10Images": "2024-04",
			"totalImagesTakenByCamera": 13,
			"totalImagesTakenByCameraInLast30Days": 2
		},
		"videoInfo": {
			"totalVideos": 65,
			"totalVideosCreatedInLast30Days": 13,
			"totalVideosTakenByCamera": 0,
			"totalVideosTakenByCameraInLast30Days": 0
		},
		"smsInfo": {
			"totalSms": 720,
			"totalSmsInInbox": 695,
			"totalSmsInInboxWithStatusRead": 592,
			"totalSmsInInboxFromKnownNumber": 0,
			"totalSmsInOutbox": 0,
			"totalSmsInOutboxSentDuringWeekdays": 0
		},
		"callInfo": {
			"totalCalls": 2000,
			"totalCallsToDistinctCountries": 1,
			"countryWithMostFrequentCall": "NG",
			"totalCallsForEachType": {
				"incoming": 0,
				"outgoing": 0,
				"missed": 0,
				"other": 2000
			},
			"totalCallsFromKnownNumbers": 1507,
			"totalCallsFromUnknownNumbers": 493,
			"totalCallsDuringWeekdays": 1446
		}
	},
	"_id": "66ce00cac30a16b1807f8d97",
	"client": "66ce00cac30a1618797f8d96",
	"businessId": "66910fcda22dff27a59cdfa3",
	"permissionLevel": "full",
	"dataCollectedAt": 1723650613034,
	"createdAt": "2024-08-27T16:37:30.959Z",
	"lastModifiedAt": "2024-08-27T16:37:49.245Z",
	"__v": 0,
	"_createdAt": "2024-08-27T16:37:3030+00:00",
	"_lastModifiedAt": "2024-08-27T16:37:4949+00:00",
	"id": "66ce00cac30a16b1807f8d97"
}


