import { Redirect } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import CSS from 'csstype'
import { useEffect, useState } from 'react'
import Chat from './Chat/Chat'
import ChatInterface from '../../interfaces/ChatInterface'
import UserInterface from '../../interfaces/UserInterface'
import SidebarHeader from './Sidebar/SidebarHeader'
import { getUserChats, getUserContacts } from '../../services/server'
import {initiateSocket } from '../../services/socketClient'
import AddContacts from '../AddContacts/AddContacts'

const Main = (): JSX.Element => {
	const [selectedContactInfo, setselectedContactInfo] = useState<UserInterface>({ name: 'default', username: 'default', lastOnline: new Date(), numberOfNewMessages: 0 })
	const [contacts, setContacts] = useState<Array<UserInterface>>([])
	const [chats, setChats] = useState<Array<ChatInterface>>([])
	const [selectAddContact, setSelectAddContact] = useState(Boolean)
	useEffect(() => {
		const getDataFromServer = async () => {
			const getContacts = await getUserContacts()
			setContacts(getContacts)
			const getChats = await getUserChats()
			setChats(getChats)
		}
		if (contacts.length == 0) {
			getDataFromServer()
			initiateSocket()
		}

	}, [])

	if (selectAddContact)
		return (
			<div>
				<AddContacts selectAddContactState={{ selectAddContact, setSelectAddContact }} />
			</div>
		)


	if (!localStorage.getItem('token'))
		return (<Redirect to='/Auth' />)

	if (contacts.length == 0)
		return (
			<div>
				<SidebarHeader selectAddContactState={{ selectAddContact, setSelectAddContact }} />
				<div style={mainDivNoContactsStyle}>
					Add contacts through the button on top😊👋
				</div>
			</div>
		)


	if (selectedContactInfo.name !== 'default')
		return (
			<div style={mainWrapperWithChatStyle}>
				<Sidebar contactsInfo={{ contacts, setContacts }} selectedChatState={{ selectedContactInfo, setselectedContactInfo }} selectAddContactState={{ selectAddContact, setSelectAddContact }} />
				<Chat chatState={{ chats, setChats }} selectedChatState={{ selectedContactInfo, setselectedContactInfo }} />
			</div>

		)


	return (
		<div style={mainWrapperStyle}>
			<Sidebar contactsInfo={{ contacts, setContacts }} selectedChatState={{ selectedContactInfo, setselectedContactInfo }} selectAddContactState={{ selectAddContact, setSelectAddContact }} />
			<div style={mainDivNoChatStyle}>
				Say hi to your friends 😊👋
			</div>
		</div>
	)
}

const mainDivNoChatStyle: CSS.Properties = {
	color: 'white',
	backgroundColor: '#334257',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	width: '100%',
	fontSize: '70px',
	height: '100%'
}

const mainDivNoContactsStyle: CSS.Properties = {
	color: 'white',
	backgroundColor: '#334257',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	width: '100%',
	fontSize: '70px',
	height: '90%'
}


const mainWrapperStyle: CSS.Properties = {
	display: 'grid',
	gridTemplateRows: '100% 50px',
	gridTemplateColumns: '20% 80%'
}

const mainWrapperWithChatStyle: CSS.Properties = {
	display: 'grid',
	gridTemplateRows: '100% 50px',
	gridTemplateColumns: '20% 80%'
}
export default Main