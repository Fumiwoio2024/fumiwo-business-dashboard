import ContactPersonForm from "@components/forms/ContactPersonForm"
import Card from "@components/global/Card"
import { H2, P } from "@components/global/Typography"

const ContactDetails = () => {
	return (
		<Card className=' pb-20 flex-1'>
			<div className="space-y-3">
				<H2>
					Enter business contact person's details
				</H2>
				<P>Complete the following steps to fully get onboarded</P>
			</div>
			<ContactPersonForm />

		</Card>
	)
}

export default ContactDetails