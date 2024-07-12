import { useAuthProvider } from '@/store/context/useAuthProvider'
import AuthHeader from '@components/global/AuthHeader'
import { PrimaryButton } from '@components/global/Buttons'
import successCheck from '@images/success-check.png'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ForgotSuccess = () => {
	const { setShowLogo } = useAuthProvider()


	useEffect(() => {
		setShowLogo(false)

		return () => {
			setShowLogo(true)
		}
	}, [setShowLogo])

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