import { ForwardedRef, InputHTMLAttributes, TextareaHTMLAttributes, forwardRef, useState } from 'react'
import Divider from './Divider'

// type TInputProps = ({
// 	label: string;
// 	textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
// } & InputHTMLAttributes<HTMLInputElement>)

type TInputProps = {
	label?: string;
	error: string | undefined;
	noMessage?: boolean
	leftComponent?: JSX.Element
} &
	(
		InputHTMLAttributes<HTMLInputElement>
		| ({ isLargeInput: true; } & TextareaHTMLAttributes<HTMLTextAreaElement>)
	)


const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, TInputProps>(({ label, error, noMessage, leftComponent, ...props }, ref) => {
	const [isEyeOpened, setIsEyeOpened] = useState(false)

	const isLargeInput = 'isLargeInput' in props


	return (
		<div className='w-full text-textHeader'>
			{label && (
				<>
					<label htmlFor={props.name} className='text-sm font-normal'>
						{label}
					</label>
					<Divider height={6} />
				</>
			)}
			<div
				className={`w-full flex border items-center border-inputBorder rounded-md focus-within:outline overflow-hidden 
				${[
						error ? 'focus-within:outline-red-500' : 'focus-within:outline-primaryGreen',
						props.disabled ? '!bg-disabledInput' : ''
					].join(' ')} `}
			>
				{leftComponent}
				{isLargeInput ? (
					<textarea ref={ref as ForwardedRef<HTMLTextAreaElement>} {...props} className={`py-3 px-4 border-none outline-none bg-white w-full  ${props.className}`} />
				) : (
					<>
						<input
							ref={ref as ForwardedRef<HTMLInputElement>}
							{...props}
							id={props.name}
							security='password'
							type={isEyeOpened ? 'text' : props.type}
								className={`py-3 px-4 border-none outline-none w-full ${props.className}`}
						/>
						{props.type === 'password' && (
							<div role='button' onClick={() => setIsEyeOpened(!isEyeOpened)} className='px-3.5 flex justify-center items-center cursor-pointer'>
								{isEyeOpened ? (
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g opacity="0.55">
												<path d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke="#404F65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z" stroke="#404F65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</g>
									</svg>
								) : (
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g opacity="0.55">
													<path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke="#404F65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77" stroke="#404F65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M8.41992 19.5302C9.55992 20.0102 10.7699 20.2702 11.9999 20.2702C15.5299 20.2702 18.8199 18.1902 21.1099 14.5902C22.0099 13.1802 22.0099 10.8102 21.1099 9.40018C20.7799 8.88018 20.4199 8.39018 20.0499 7.93018" stroke="#404F65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M15.5099 12.7002C15.2499 14.1102 14.0999 15.2602 12.6899 15.5202" stroke="#404F65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M9.47 14.5298L2 21.9998" stroke="#404F65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M21.9998 2L14.5298 9.47" stroke="#404F65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</g>
									</svg>
								)}
							</div >
						)}
					</>
				)
				}
			</div>
			{error && !noMessage && (
				<p className='text-red-500 text-xs mt-1'>
					{error}
				</p>
			)}
		</div>
	)
})

export default Input