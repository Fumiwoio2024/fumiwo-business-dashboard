import { useMForgotPassword } from "@/hooks/api/mutations/auth"
import { PrimaryButton } from "@components/global/Buttons"
import Input from "@components/global/Input"
import { P } from "@components/global/Typography"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"

const defaultValues = {
	email: '',
}

const ForgotPasswordForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues
	})
	const navigate = useNavigate();

	const { mutate, isPending } = useMForgotPassword()


	const submitForm: SubmitHandler<typeof defaultValues> = async (data) => {


		const payload = {
			...data,
			userType: 'business'
		}

		mutate(payload, {
			onSuccess: () => {
				reset()

				navigate('/verify', {
					state: {
						email: data.email
					}
				})
			}
		})
	}


	return (
		<form onSubmit={handleSubmit(submitForm)} className="text-left space-y-4">
			<Input
				label='Email'
				placeholder="Enter your email"
				type='email'
				error={errors.email?.message}
				{...register('email',
					{
						required: 'Email is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Invalid email address'
						}
					}
				)}
			/>
			<PrimaryButton
				loading={isPending}
				className="w-full"
				type="submit"
			>
				Submit
			</PrimaryButton>

			<P className="w-fit mx-auto text-center">Remember Password? <Link to='/forgot-password' className="text-textHeader">Login</Link></P>

		</form>
	)
}

export default ForgotPasswordForm