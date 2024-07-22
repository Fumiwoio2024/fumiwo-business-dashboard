import api from '@/config/axios'
import { navLinks } from '@/utils/data'
import logo from '@images/fumiwo-logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'



const bottomNavLinks = [
	{
		name: 'Logout',
		Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M15.2409 22.2705H15.1109C10.6709 22.2705 8.53094 20.5205 8.16094 16.6005C8.12094 16.1905 8.42094 15.8205 8.84094 15.7805C9.24094 15.7405 9.62094 16.0505 9.66094 16.4605C9.95094 19.6005 11.4309 20.7705 15.1209 20.7705H15.2509C19.3209 20.7705 20.7609 19.3305 20.7609 15.2605V8.74047C20.7609 4.67047 19.3209 3.23047 15.2509 3.23047H15.1209C11.4109 3.23047 9.93094 4.42047 9.66094 7.62047C9.61094 8.03047 9.26094 8.34047 8.84094 8.30047C8.74238 8.29277 8.64632 8.26569 8.55825 8.22077C8.47018 8.17586 8.39185 8.114 8.32774 8.03875C8.26364 7.96349 8.21502 7.87632 8.18468 7.78224C8.15434 7.68815 8.14288 7.589 8.15094 7.49047C8.49094 3.51047 10.6409 1.73047 15.1109 1.73047H15.2409C20.1509 1.73047 22.2509 3.83047 22.2509 8.74047V15.2605C22.2509 20.1705 20.1509 22.2705 15.2409 22.2705Z" fill="#FF0000" />
			<path d="M14.9972 12.75H3.61719C3.20719 12.75 2.86719 12.41 2.86719 12C2.86719 11.59 3.20719 11.25 3.61719 11.25H14.9972C15.4072 11.25 15.7472 11.59 15.7472 12C15.7472 12.41 15.4072 12.75 14.9972 12.75Z" fill="#FF0000" />
			<path d="M5.8477 16.0998C5.6577 16.0998 5.4677 16.0298 5.3177 15.8798L1.9677 12.5298C1.82822 12.3887 1.75 12.1983 1.75 11.9998C1.75 11.8014 1.82822 11.611 1.9677 11.4698L5.3177 8.11984C5.6077 7.82984 6.0877 7.82984 6.3777 8.11984C6.6677 8.40984 6.6677 8.88984 6.3777 9.17984L3.5577 11.9998L6.3777 14.8198C6.6677 15.1098 6.6677 15.5898 6.3777 15.8798C6.2377 16.0298 6.0377 16.0998 5.8477 16.0998Z" fill="#FF0000" />
		</svg>,
		link: '',
	}
]

const Sidebar = () => {
	const navigate = useNavigate();


	return (
		<div className="h-screen bg-white flex flex-col w-[276px] border-r border-sidebarBorder ">
			<section className='pl-12 flex items-center border-b border-otpBox h-20 '>
				<Link to='/dashboard/overview'>
					<img
						src={logo}
						alt="fumiwo logo"
						className="max-w-[124px] max-h-10"
					/>
				</Link>
			</section>

			<section className='pl-8 pt-7 pb-14 flex-1 flex flex-col justify-between'>
				<nav className="w-fit flex flex-col space-y-2">
					{navLinks.map((link, index) => (
						<NavLink
							key={index}
							to={`/dashboard${link.link}`}
							className={({ isActive }) => `py-3 px-4 flex gap-4 items-center text-lg duration-300 ${isActive ? 'text-sideBarText font-semibold' : 'text-unFocusedText font-medium'}`}
						>
							{({ isActive }) => (
								<>
									<div> {isActive ? link.ActiveIcon : link.InactiveIcon} </div>
									<p >{link.name}</p>
								</>
							)}
						</NavLink>
					))}
				</nav>

				<nav>
					{bottomNavLinks.map((link, index) => (
						<button
							key={index}
							className={`py-3 px-4 flex gap-4 items-center text-lg duration-300 text-absoluteRed font-medium`}
							// onClick={() => {
							// 	console.log('logging out...');
							// 	localStorage.clear();
							// 	api.defaults.headers.common['Authorization'] = undefined
							// 	redirect('/login')
							// }}
							onClick={() => {
								console.log('logging out...');

								localStorage.clear();
								api.defaults.headers.common['Authorization'] = undefined
								return navigate('/login', { replace: true })
							}}
						>
							<div> {link.Icon} </div>
							<p>{link.name}</p>
						</button>
					))}
				</nav>
			</section>
		</div>
	)
}

export default Sidebar