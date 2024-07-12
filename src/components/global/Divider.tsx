import { ReactNode } from 'react'

const Divider = ({ height, className }: { height?: number, className?: ReactNode }) => {
	return (
		<div style={{
			height
		}} className={`w-full ${className}`} />
	)
}

export default Divider