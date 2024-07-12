import LoginForm from '@/components/forms/LoginForm'
import AuthHeader from '@components/global/AuthHeader'
import SetPassword from './SetPassword'
import { useState } from 'react'


const Login = () => {
	const [isSetPassword, setIsSetPassword] = useState(false)
	const [tokenState, setTokenState] = useState('')


	return (
		<div className='space-y-8'>
			{isSetPassword ? (
				<SetPassword description='Enter new password' tokenState={tokenState} />
			) : (
				<>
					<AuthHeader
						title='Welcome Back!'
						description='Enter your email here to reset'
					/>

					<LoginForm setIsSetPassword={setIsSetPassword} setTokenState={(token) => setTokenState(token)} />
				</>
			)
			}
		</div >
	)
}

export default Login