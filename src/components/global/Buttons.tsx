import { ButtonHTMLAttributes, ReactNode } from 'react'

type TPrimaryButton = {
	onClick?: () => void;
	children: string | JSX.Element;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	loading?: boolean;
	className?: ReactNode;
}

export const PrimaryButton = ({ children, className, disabled, loading, ...props }: TPrimaryButton) => {
	return (
		<button disabled={disabled || loading} className={`bg-primaryGreen text-textHeader py-3 px-10 rounded-[50px] font-medium text-lg hover:bg-primaryGreen/80 active:bg-primaryGreen/50 transition duration-300 ${(disabled || loading) && 'cursor-not-allowed active:opacity-50'} ${className}`}  {...props}>
			{children}
		</button>
	)
}
export const SecondaryButton = ({ children, className, ...props }: TPrimaryButton & ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={` text-textHeader py-3 px-10 rounded-[50px] font-medium text-lg transition duration-300 bg-white border border-primaryGreen hover:bg-primaryGreen/5 active:bg-primaryGreen/20  ${className} `}
			{...props}
		>
			{children}
		</button>
	)
}

