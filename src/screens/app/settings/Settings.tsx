import { H1 } from '@components/global/Typography'
import { Link } from 'react-router-dom'

const Settings = () => {
	return (
		<div className='w-full h-screen flex flex-col items-center justify-center'>
			<H1>Settings</H1>
			<br />

			<button>
				<Link to='onboarding/business-details'>
					<H1>Onboarding</H1>
				</Link>
			</button>
		</div>
	)
}

export default Settings