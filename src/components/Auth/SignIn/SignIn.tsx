import './SignIn.css'
import SignInForm from './SignInForm'

const SignIn = (): JSX.Element => {
	return(
		<div id="SignInDiv">
			{<SignInForm />}
		</div>
	)
}

export default SignIn