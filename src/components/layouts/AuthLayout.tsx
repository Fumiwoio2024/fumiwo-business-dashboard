import { Link, Outlet, redirect } from 'react-router-dom'
import logo from '@images/fumiwo-logo.png'
import { useAuthProvider } from '@/store/context/useAuthProvider'
import api from '@/config/axios'
import { useLayoutEffect } from 'react'

const AuthLayout = () => {
	const { showLogo } = useAuthProvider()

	useLayoutEffect(() => {
		const token = localStorage.getItem('fmw_business_auth_token')
		if (token) {
			api.defaults.headers.common['Authorization'] = `Bearer ${token}`
		} else {
			api.defaults.headers.common['Authorization'] = ''
			redirect('/login')
		}
	}, [])


	return (
		<div className='p-4 w-screen h-screen flex '>
			<section className=' bg-authBg bg-cover bg-center rounded-xl w-5/12 text-center flex flex-col justify-between py-24'>

				<div className=' text-white'>
					<h4 className=' font-bold text-[40px]'>
						Welcome to Fumiwo
					</h4>
					<p className='mt-1 text-[20px] '>
						For better credit decisions
					</p>
				</div>
				<div className='mt-24 text-white'>
					<h4 className=' font-bold text-[40px]'>
						AI Driven credit scoring
					</h4>
					<p className='mt-1 text-[20px] max-w-md mx-auto'>
						Get valuable insights of your borrowers delivered in real-time
					</p>
				</div>
			</section>
			<section className='w-7/12 overflow-y-auto'>

				<div className=' h-full flex flex-col justify-between'>
					<div className="w-[480px] space-y-8 px-6 mx-auto my-[7%] text-center">
						{showLogo && <div className='w-fit mx-auto '>
							<img
								src={logo}
								alt='logo'
								className='max-w-[238px] cursor-pointer'
							/>
						</div>}

						<Outlet />

					</div>

					<div className='flex mb-3.5 text-center mx-auto w-fit space-x-1.5 text-paraGray hover:text-textHeader'>
						<Link to='https://fumiwo-website.vercel.app/terms-conditions'>
							Terms of Use
						</Link>
						<p>|</p>
						<Link to='https://fumiwo-website.vercel.app/terms-conditions'>
							Privacy Policy
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AuthLayout