import api from "@/config/axios";
import { useMutation } from "@tanstack/react-query"
import { TGeneralRes, TMfa } from "@type/global.types"

type TUpdateProfileReq = {
	contactPersonInfo: {
		firstName: string;
		lastName: string;
		role: string | undefined;
		email: string;
		phone: {
			countryCode: string;
			mobile: string;
		};
	};
	name: string;
	type: string;
	registrationNumber: string;
	addressInfo: {
		country: string;
		address: string;
		state: string;
		city: string;
	};
}

type TUpdateProfileRes = TGeneralRes & {
	data: {
		mfa: TMfa;
		passwordChangedAt: string;
		resetPasswordToken: string | null;
		isEmailVerified: boolean;
		isActive: boolean;
		isLocked: boolean;
		loginTimes: string[];
		loginAttempts: number;
		firstName: string;
		lastName: string;
		email: string;
		dateAdded: string;
		lastModifiedAt: string;
		_createdAt: string;
		_lastModifiedAt: string;
		id: string;
	}
}

export const useMUpdatePassword = () => {
	// const token = localStorage.getItem('fmw_business_auth_token')
	const mutation = useMutation({
		mutationFn: (req: TUpdateProfileReq) => {
			return api.put<TUpdateProfileRes>(`/businesses/update-profile`, req)
		},
	})

	return mutation
}