import { H1 } from "@components/global/Typography"
import { Link } from "react-router-dom"


const Dashboard = () => {
	return (
		<div className='w-screen h-screen flex flex-col items-center justify-center'>
			<H1>Home page</H1>
			<br />

			<button>
				<Link to='settings'>
					<H1>Settings</H1>
				</Link>
			</button>
		</div>
	)
}

export default Dashboard