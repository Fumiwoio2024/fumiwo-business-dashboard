import BusinessDetailsForm from "@components/forms/BusinessDetailsForm"
import Card from "@components/global/Card"
import { H2, P } from "@components/global/Typography"

const BusinessDetails = () => {
	return (
		<Card className=' pb-20 flex-1'>
			<div className="space-y-3">
				<H2>
					Fill in your business details
				</H2>
				<P> Complete the following steps to fully get onboarded </P>
			</div>
			<BusinessDetailsForm />

		</Card>
	)
}

export default BusinessDetails