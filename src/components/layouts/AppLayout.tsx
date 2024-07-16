import api from '@/config/axios'
import { useLayoutEffect } from 'react'
import { Outlet, redirect, useLocation } from 'react-router-dom'

const AppLayout = () => {
	const location = useLocation()


	// if change auth route, set token if exists, logout if not
	useLayoutEffect(() => {
		const token = localStorage.getItem('fmw_business_auth_token')
		if (token) {
			api.defaults.headers.common['Authorization'] = `Bearer ${token}`
		} else {
			api.defaults.headers.common['Authorization'] = ''
			redirect('/login')
		}
	}, [location.pathname])

	return (
		<div className='w-screen h-screen '>
			<Outlet />
		</div>
	)
}

export default AppLayout