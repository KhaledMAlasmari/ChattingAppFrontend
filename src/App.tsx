import './App.css'
import Auth from './components/Auth/Auth'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react'
import Main from './components/Main/Main'
import SignIn from './components/Auth/SignIn/SignIn'
import SignUp from './components/Auth/SignUp/SignUp'
import dotenv from 'dotenv'
import ProtectedRoute from './components/ProtectedRoute'

const App = (): JSX.Element => {
	
	dotenv.config()
	return (
		<Router>
			<div className="App">
				<ProtectedRoute path='/' exact component={Main}/>
				<Route path='/Auth' exact component={Auth} />
				<Route path='/Auth/Signin' exact render={ () => <SignIn/> }/>
				<Route path='/Auth/Signup' exact render={ () => <SignUp />} />
			</div>
		</Router>
	)
}



export default App
