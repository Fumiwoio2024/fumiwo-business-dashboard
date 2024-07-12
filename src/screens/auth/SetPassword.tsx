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
				description={description || "For security reasons, you&apos;re required to change your password to proceed"}
			/>

			<SetPasswordForm setStatus={setStatus} tokenState={tokenState} />
		</div>
	)
}

export default SetPassword