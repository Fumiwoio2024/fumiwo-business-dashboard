import React, { createContext, useContext, useState } from 'react'

const TAuthState = {

}
const AuthContext = createContext(null)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [data, setData] = useState<TAuthState>({

	})



	return (
		<AuthContext.Provider value={}>

		</AuthContext.Provider>
	)
}

const useAuthProvider = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error(
			'AuthContext must be used within a AuthProvider'
		);
	}
	return context;
};


export { AuthContext, useAuthProvider, AuthProvider } 