import { ReactNode } from "react"

type TCardProps = {
	className?: string
	children: ReactNode
}
const Card = ({ className, children }: TCardProps) => {
	return (
		<section className={`bg-white rounded-md p-8 ${className}`}>
			{children}
		</section>
	)
}

export default Card