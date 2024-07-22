import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"

const SettingsLayout = () => {
	const location = useLocation()
	const [showSettingsNav, setShowSettingsNav] = useState(true)

	useEffect(() => {
		location.pathname.includes('onboarding') ? setShowSettingsNav(false) : setShowSettingsNav(true)
	}, [location.pathname])



	return (
		<div className="">
			{showSettingsNav && (
				<div>

				</div>
			)}
			<Outlet />
		</div>
	)
}

export default SettingsLayout