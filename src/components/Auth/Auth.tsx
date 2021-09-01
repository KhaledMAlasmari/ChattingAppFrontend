import './Auth.css'
import { Link } from 'react-router-dom'

function Auth() {

	return (
		<div id="authDiv">
			<div>
				<p id="authText">Welcome to this app which is definitely {<br />} not a WhatsApp clone</p>
				<div id="authButtonsDiv">
					<Link to="/Auth/Signin" className="authButton">Sign in</Link>
					<Link to="/Auth/Signup" className="authButton">Sign up</Link>
				</div>
			</div>

		</div>
	)

}


export default Auth