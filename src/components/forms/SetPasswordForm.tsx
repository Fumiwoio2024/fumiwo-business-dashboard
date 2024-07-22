
import { useMChangePassword, useMResetNewPassword } from "@/hooks/api/mutations/auth"
import { PrimaryButton } from "@components/global/Buttons"
import Input from "@components/global/Input"
import { P } from "@components/global/Typography"
import { AxiosError } from "axios"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const defaultValues = {
	newPassword: '',
	confirmPassword: ''
}

const PasswordCheck = ({ isStrong, title }: { isStrong: boolean, title: string }) => {
	return (
		<div className="flex items-center space-x-2 ">
			{isStrong
				? (
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="16" height="16" rx="8" fill="#0BE781" />
						<path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				)
				: (
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="16" height="16" rx="8" fill="#D0D5DD" />
						<path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				)}
			<P small className="!text-sm">{title}</P>
		</div>
	)

}


const SetPasswordForm = ({ setStatus, tokenState, flow }: {
	setStatus?: () => void,
	tokenState?: string;
	flow: 'login' | 'forgot-password'
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch
	} = useForm({
		defaultValues
	})

	const navigate = useNavigate()
	const { mutate: mutateReset, isPending: isPendingReset } = useMResetNewPassword()
	const { mutate: mutateChange, isPending: isPendingChange } = useMChangePassword()

	const newPassword = watch('newPassword')
	const confirmPassword = watch('confirmPassword')

	const submitForm: SubmitHandler<typeof defaultValues> = async (data) => {
		if (!tokenState) return

		if (flow === 'forgot-password') {
			const payload = {
				token: tokenState,
				password: newPassword,
				confirmPassword: data.confirmPassword,
				userType: 'business'
			}

			mutateReset(payload, {
				onSuccess: () => {
					reset()
					setStatus?.()
				},
				onError: (error) => {
					if (error instanceof AxiosError) {
						toast.error(error.response?.data?.message)
					}
				}
			})

		} else if (flow === 'login') {
			const payload = {
				currentPassword: tokenState,
				newPassword: data.newPassword,
			}

			mutateChange(payload, {
				onSuccess: () => {
					reset()
					navigate('/dashboard/overview')
					setStatus?.()
				},
				onError: (error) => {
					if (error instanceof AxiosError) {

						toast.error(error.response?.data?.message)
					}
				}
			})
		}

	}


	return (
		<form onSubmit={handleSubmit(submitForm)} className="text-left  space-y-4">
			<Input
				label='New Password'
				placeholder="Enter your new password"
				type='password'
				error={errors.newPassword?.message}
				noMessage
				{...register('newPassword',
					{
						required: 'New Password is required',
						validate: () => newPassword === confirmPassword || 'Passwords do not match',
					}
				)}
			/>
			<Input
				label='Confirm Password'
				placeholder="Confirm your new password"
				type='password'
				error={errors.confirmPassword?.message}
				{...register('confirmPassword',
					{
						validate: () => newPassword === confirmPassword || 'Passwords do not match',
					}
				)}
			/>

			<div className="space-y-">
				<P small>Password Must contain:</P>
				<PasswordCheck
					isStrong={newPassword.length >= 8}
					title="At least 8 characters"
				/>
				<PasswordCheck
					isStrong={newPassword.match(/[A-Z]/) !== null}
					title="At least one uppercase character"
				/>
				<PasswordCheck
					isStrong={newPassword.match(/[a-z]/) !== null}
					title="At least one lowercase character"
				/>
				<PasswordCheck
					isStrong={newPassword.match(/[0-9]/) !== null}
					title="At least one number"
				/>
				<PasswordCheck
					isStrong={newPassword.match(/[!@#$%^&*(),.?":{}|<>]/) !== null}
					title="Must contain at least one special character"
				/>
			</div>


			<PrimaryButton
				className="w-full "
				type="submit"
				loading={isPendingReset || isPendingChange}
			>
				Continue
			</PrimaryButton>


		</form>
	)
}

export default SetPasswordForm