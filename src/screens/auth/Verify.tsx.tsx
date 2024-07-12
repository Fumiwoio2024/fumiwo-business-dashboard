import OTPForm from '@components/forms/OTPForm'
import AuthHeader from '@components/global/AuthHeader'
import { useState } from 'react'
import ForgotSuccess from './ForgotSuccess'
import SetPassword from './SetPassword'

const Otp = () => {
	const [status, setStatus] = useState('')
	const [tokenState, setTokenState] = useState('')

	// useEffect(() => {
	// 	setStatus('')
	// }, [])
	const switchByStatus = () => {
		switch (status) {
			case 'success':
				return (
					<ForgotSuccess />
				)
			case 'set-password':
				return (
					<SetPassword setStatus={() => setStatus('success')} tokenState={tokenState} />
				)
			default:
				return (
					<>
						<AuthHeader
							title='Enter OTP'
							description='Please enter the OTP sent to your email to reset'
						/>
						<OTPForm setStatus={() => setStatus('set-password')} setTokenState={setTokenState} />
					</>
				)
		}
	}
	return (
		<div className='space-y-8'>
			{switchByStatus()}
		</div>
	)
}

export default Otp