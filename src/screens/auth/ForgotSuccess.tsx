import AuthHeader from '@components/global/AuthHeader'
import { PrimaryButton } from '@components/global/Buttons'
import successCheck from '@images/success-check.png'
import { Link } from 'react-router-dom'

const ForgotSuccess = () => {
	return (
		<div className='space-y-8'>
			<div className='w-fit mx-auto '>
				<img
					src={successCheck}
					alt='logo'
					className='max-w-[238px] cursor-pointer'
				/>
			</div>

			<AuthHeader
				title='Password reset complete'
				description='You can now log in with your new password'
			/>

			<Link to='/login'>
				<PrimaryButton>
					Login
				</PrimaryButton>
			</Link>
		</div>)
}

export default ForgotSuccess