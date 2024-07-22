import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useChangeRoute = (callback: (pathname: string) => void) => {
	const location = useLocation()

	useEffect(() => {
		callback(location.pathname)
	}, [location.pathname, callback])



	return { ...location }
}

export default useChangeRoute