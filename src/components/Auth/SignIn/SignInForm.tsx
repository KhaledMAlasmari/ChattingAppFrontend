import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { signInRequest } from '../../../services/server'
import Loader from 'react-loader-spinner'

function SignInForm() {
	const token = localStorage.getItem('token')
	const [isLoading, setIsLoading] = useState(Boolean)
	const [error, setError] = useState('')


	const sendAuthRequest = async (event: React.FormEvent<HTMLFormElement>) => {
		setIsLoading(true)
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const response = await signInRequest(String(formData.get('Username')), String(formData.get('Password')))
		setIsLoading(false)
	}

	if (isLoading)
		return <Loader type="Circles" color="#00BFFF" height={80} width={80} />


	return (
		<div id="SignInFormDiv">
			<form onSubmit={sendAuthRequest} >
				{error !== '' ? <h3 style={{ color: 'red' }}>{error}</h3> : null}
				{token ? <Redirect to='/' /> : null}
				<p>Welcome back!</p>
				<input className="SignInFormInput"  required name="Username" placeholder="Username" type="text" />
				<input className="SignInFormInput" placeholder="Password" required name="Password" type="password" />
				<input className="authButton" type="submit" value="Sign in" />
			</form>
		</div>
	)
}

export default SignInForm