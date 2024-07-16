import api from "@/config/axios"
import { useMSignIn } from "@/hooks/api/mutations/auth"
import { PrimaryButton } from "@components/global/Buttons"
import Input from "@components/global/Input"
import { P } from "@components/global/Typography"
import { AxiosError } from "axios"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const defaultValues = {
	email: '',
	password: ''
}

const LoginForm = ({ setIsSetPassword, setTokenState }: { setIsSetPassword: (state: true) => void; setTokenState?: (token: string) => void }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setError
	} = useForm({
		defaultValues
	})
	const { mutate, isPending } = useMSignIn()
	const navigate = useNavigate();

	const submitForm: SubmitHandler<typeof defaultValues> = async (formData) => {

		const payload = {
			...formData,
			userType: 'business'
		}

		mutate(payload, {
			onSuccess: (data) => {
				// if for some reason the token isn't sent
				if (!data.data.data.token) {
					setError('password', {
						type: 'custom',
						message: 'An error occurred during sign up, please try again'
					})
					return
				}
				reset()

				localStorage.setItem('fmw_business_auth_token', data.data.data.token)
				api.defaults.headers.common['Authorization'] = `Bearer ${data.data.data.token}`
				if (data.data?.data.user.isDefaultPassword === true) {
					setTokenState?.(formData.password)
					setIsSetPassword(true)
				} else {
					navigate('/dashboard')
				}
			},
			onError: (error) => {
				if (error instanceof AxiosError) {
					toast.error(error.response?.data?.message)
				}
			}
		})
	}


	return (
		<form onSubmit={handleSubmit(submitForm)} className="text-left  space-y-4">

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
			<Input
				label='Password'
				type='password'
				placeholder="Enter your password"
				error={errors.password?.message}
				{...register('password',
					{
						required: 'Password is required',
					}
				)}
			/>
			<Link to='/forgot-password' className="block w-fit ml-auto ">
				<P>Forgot Password?</P>
			</Link>
			<PrimaryButton
				loading={isPending}
				className="w-full"
				type="submit"
			>
				Login
			</PrimaryButton>

			<div className="text-center">
				<P>Don&apos;t have an account? <button type='button' className="text-primaryGreen">Contact Admin</button></P>
			</div>

		</form>
	)
}

export default LoginForm