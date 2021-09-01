import CSS from 'csstype'
import { useState } from 'react'
import Loader from 'react-loader-spinner'
import { addNewContact } from '../../services/server'

const AddContactForm = (): JSX.Element => {

	const [isLoading, setIsLoading] = useState(Boolean)
	const [responseMessage, setResponseMessage] = useState('')
	const sendNewContactRequest = async (event : React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setIsLoading(true)
		const formData = new FormData(event.currentTarget)
		const response = await addNewContact(String(formData.get('Username')))
		if (response === 201) {
			setResponseMessage('The user have been added to your contacts!')
			setIsLoading(false)
		}
		else{
			setResponseMessage(response == 400 ? 'the user doesn\'t exist': 'something went wrong')
		}
		setIsLoading(false)
	}

	if(isLoading)
		return <Loader type="Circles" color="#00BFFF" height={80} width={80} />

	return (
		<form style={mainWrapperStyle} onSubmit={sendNewContactRequest}>
			<p>Add contact</p>
			<input className="SignInFormInput" required name="Username" placeholder="Username" type="text" />
			<input className="authButton" type="submit" value="Add" />
			<p>{responseMessage !== '' ? responseMessage: null}</p>
		</form>
	)
}

const mainWrapperStyle: CSS.Properties = {
	height: '750px',
	width: '500px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'center',
	backgroundColor: '#5D8AAB',
	borderRadius: '15px',
	fontSize: '50px',
	color: 'white',
	marginTop: '50px'

}

/*
	height: 800px;
	width: 500px;
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#5D8AAB',
	borderRadius: '15px',
*/

export default AddContactForm