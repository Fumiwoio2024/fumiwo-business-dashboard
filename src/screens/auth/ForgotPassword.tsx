import ForgotPasswordForm from '@components/forms/ForgotPasswordForm'
import AuthHeader from '@components/global/AuthHeader'
// import { useState } from 'react'
// import ForgotSuccess from './ForgotSuccess'
// import SetPassword from './SetPassword'

const ForgotPassword = () => {
	// const [status, setStatus] = useState('')

	// const switchByStatus = () => {
	// 	switch (status) {
	// 		case 'success':
	// 			return (
	// 				<ForgotSuccess />
	// 			)
	// 		case 'set-password':
	// 			return (
	// 				<SetPassword setStatus={setStatus} />
	// 			)
	// 		default:
	// 			return (
	// 				<>
	// 					<AuthHeader
	// 						title='Forgot Password'
	// 						description='Enter your email here to reset'
	// 					/>
	// 					<ForgotPasswordForm />
	// 				</>
	// 			)
	// 	}
	// }


	return (
		<div className='space-y-8'>
			<AuthHeader
				title='Forgot Password'
				description='Enter your email here to reset'
			/>
			<ForgotPasswordForm />

		</div>
	)
}

export default ForgotPassword