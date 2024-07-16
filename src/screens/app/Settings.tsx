import { H1 } from '@components/global/Typography'
import { Link } from 'react-router-dom'

const Settings = () => {
	return (
		<div className='w-screen h-screen flex flex-col items-center justify-center'>
			<H1>Settings</H1>
			<br />

			<button>
				<Link to='/dashboard'>
					<H1>Home page</H1>
				</Link>
			</button>
		</div>
	)
}

export default Settings