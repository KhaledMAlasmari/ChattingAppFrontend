import axios from 'axios'

const baseUrl = `${process.env.PUBLIC_URL}`
const signInRequest = async (username: string, password: string): Promise<number> => {
	try{
		const response = await axios.post(`${baseUrl}/login`, {username, password})
		if(response.status === 200){
			localStorage.setItem('token', response.data.token)
			return response.status
		}
		return 401
	}
	catch(error){
		return 401
	}
}

const signUpRequest = async (name: string, email: string, username: string, password: string): Promise<number> => {
	try{
		const response = await axios.post(`${baseUrl}/api/users/newUser`, {name, email, username, password})
		if(response.status === 201)
			return 201
		return 400
	}
	catch(error){
		return 400
	}
}

const checkIfEmailIsAvaliable = async (email: string) => {
	try{
		const response = await axios.get(`${baseUrl}/api/users/checkIfEmailAvaliable/${email}`)
		if(response.status === 200)
			return 200
		return 403
	}
	catch(error){
		return 400
	}
}


const checkIfUsernameIsAvaliable = async (username: string) => {
	try{
		const response = await axios.get(`${baseUrl}/api/users/checkIfUsernameAvaliable/${username}`)
		if(response.status === 200)
			return 200
	}
	catch(error){
		return 403
	}
}

const addNewContact = async (contactUsername: string) => {
	try{
		const token = localStorage.getItem('token')
		const response = await axios.put(`${baseUrl}/api/users/addContact/${contactUsername}`,{}, {headers: { 'Authorization': `Bearer ${token}` }}, )
		return response.status
	}
	catch(error){
		return 400
	}
}

const getUserChats = async () => {
	try{
		const token = localStorage.getItem('token')
		const response = await axios.get(`${baseUrl}/api/users/getChats`, {headers: { 'Authorization': `Bearer ${token}` }})
		if(response.status === 200)
			return response.data
	}
	catch(error){
		return error
	}
}


const getUserContacts = async () => {
	try{
		const token = localStorage.getItem('token')
		const response = await axios.get(`${baseUrl}/api/users/getContacts`,{headers: { 'Authorization': `Bearer ${token}` }})
		if(response.status === 200)
			return response.data
	}
	catch(error){
		return error
	}
}

const markChatsRead = async (contactUsername: string) => {
	try{
		const token = localStorage.getItem('token')
		const response = await axios.put(`${baseUrl}/api/chats/markRead/${contactUsername}`,{} ,{headers: { 'Authorization': `Bearer ${token}` }} )
		return response.status
	}
	catch(error){
		return error
	}
}

const isJwtTokenValid = async () : Promise<boolean> => {
	try{
		const response = await axios.get(`${baseUrl}/login/validateToken/`, {headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
		if(response.status === 200)
			return true
		return false
	}
	catch(error){
		return false
	}
}


export {
	signInRequest,
	signUpRequest,
	checkIfUsernameIsAvaliable,
	checkIfEmailIsAvaliable,
	addNewContact,
	getUserChats,
	getUserContacts,
	isJwtTokenValid,
	markChatsRead
}