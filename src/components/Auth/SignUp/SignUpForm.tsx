import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { checkIfEmailIsAvaliable, checkIfUsernameIsAvaliable, signUpRequest } from '../../../services/server'
import Loader from 'react-loader-spinner'

function SignUpForm() {
	const [isLoading, setIsLoading] = useState(Boolean)
	const [isRegisterd, setIsRegisterd] = useState(Boolean)
	const [error, setError] = useState('')


	const sendAuthRequest = async (event: React.FormEvent<HTMLFormElement>) => {
		setIsLoading(true)
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const response = await signUpRequest(String(formData.get('Name')), String(formData.get('Email')), String(formData.get('Username')), String(formData.get('Password')))
		if(response === 201)
			setIsRegisterd(true)

		response === 400 ? setError('Your username / password doesn\'t meet the requirements') : setError(`Something is wrong on our part, sorry for the inconvenience\n error code ${response}`)
		setIsLoading(false)
	}

	const checkUsername = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const username = event.target.value
		if(username.length < 1){
			event.target.style.backgroundColor = 'white'
			return
		}

		const response = await checkIfUsernameIsAvaliable(username)
		if(response === 200)
			event.target.style.backgroundColor = 'green'
		else{
			event.target.style.backgroundColor = 'red'
		}
	}

	const checkEmail = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const email = event.target.value
		if(email.length < 1){
			event.target.style.backgroundColor = 'white'
			return
		}
		const response = await checkIfEmailIsAvaliable(email)
		if(response === 200)
			event.target.style.backgroundColor = 'green'
		else{
			event.target.style.backgroundColor = 'red'
		}
	}

	const checkPassword = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const password = event.target.value
		if(password.length < 1){
			event.target.style.backgroundColor = 'white'
			return
		}
		if(password.length > 6){
			event.target.style.backgroundColor = 'green'
			return
		}
		if(password.length < 6){
			event.target.style.backgroundColor = 'red'
			return
		}
	}


	if (isLoading)
		return <Loader type="Circles" color="#00BFFF" height={80} width={80} />


	return (
		<div id="SignInFormDiv">
			<form onSubmit={sendAuthRequest} >
				{error !== '' ? <h3 style={{ color: 'red' }}>{error}</h3> : null}	
				{isRegisterd ? <Redirect to='/Auth/SignIn' /> : null}
				<p>Join us!</p>
				<input className="SignInFormInput" required name="Name" placeholder="Full name" type="text" />
				<input className="SignInFormInput" onChange={checkEmail} required name="Email" placeholder="Email address" type="email" />
				<input className="SignInFormInput" onChange={checkUsername} required name="Username" placeholder="Username" type="text" />
				<input className="SignInFormInput" onChange={checkPassword} required placeholder="Password" name="Password" type="password" />
				<input className="authButton" type="submit" value="Sign up" />
			</form>
		</div>
	)
}

export default SignUpForm