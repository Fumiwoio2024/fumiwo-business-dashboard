import SetPasswordForm from '@components/forms/SetPasswordForm'
import AuthHeader from '@components/global/AuthHeader'


type TSetPasswordProps = {
	description?: string
	setStatus?: () => void
	tokenState?: string
}


const SetPassword = ({ description, setStatus, tokenState }: TSetPasswordProps) => {
	return (
		<div className='space-y-8'>
			<AuthHeader
				title='Set new password'
				description={description || 'Enter new password'}
			/>

			<SetPasswordForm setStatus={setStatus} tokenState={tokenState} flow={description ? 'login' : 'forgot-password'} />
		</div>
	)
}

export default SetPassword