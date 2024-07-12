import { H3, P } from './Typography'

const AuthHeader = ({ title, description }: { title: string; description?: string }) => {
	return (
		<div className='space-y-1.5'>
			<H3>
				{title}
			</H3>
			{description && <P className='font-normal text-base'>{description}</P>}
		</div>
	)
}

export default AuthHeader