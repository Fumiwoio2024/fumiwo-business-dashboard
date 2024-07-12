import { useContext } from "react";
import { AuthContext, TAuthState } from "./AuthContext";

export const useAuthProvider = () => {
	const context: TAuthState | undefined = useContext(AuthContext);
	if (context === undefined) {
		throw new Error(
			'AuthContext must be used within a AuthProvider'
		);
	}
	return context;
};
