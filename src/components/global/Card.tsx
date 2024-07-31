import { ReactNode } from "react"

type TCardProps = {
	className?: string
	children: ReactNode
}
const Card = ({ className, children }: TCardProps) => {
	return (
    <section className={`rounded-md bg-white p-6 ${className}`}>
      {children}
    </section>
  );
}

export default Card