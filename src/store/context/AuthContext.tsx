import React, { createContext, useState } from 'react'

export type TAuthState = {
	showLogo: boolean
	setShowLogo: (value: boolean) => void
}
const AuthContext = createContext<TAuthState | undefined>(undefined)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [showLogo, setShowLogo] = useState(true)


	return (
		<AuthContext.Provider value={{ showLogo, setShowLogo }}>
			{children}
		</AuthContext.Provider>
	)
}


export { AuthContext, AuthProvider } 