import User from '../../../interfaces/UserInterface'
import SidebarItem from './SidebarItem'
import CSS from 'csstype'
import SidebarHeader from './SidebarHeader'
import { useEffect } from 'react'
import { onMessageRecived } from '../../../services/socketClient'
import Message from '../../../interfaces/MessageInterface'
const Sidebar = ({ contactsInfo: {contacts, setContacts}, selectedChatState: {selectedContactInfo, setselectedContactInfo}, selectAddContactState: {selectAddContact, setSelectAddContact}}: SidebarProps): JSX.Element => {
	/*
	useEffect(() => {
		const reciveMessage = (message: Message) => {
			const userIndex = contacts.findIndex(contact => contact.username === message.senderUsername)
			const modifiedArray = [...contacts]
			!modifiedArray[userIndex].numberOfNewMessages ? modifiedArray[userIndex].numberOfNewMessages = 1 : modifiedArray[userIndex].numberOfNewMessages++
			setContacts(modifiedArray)
		}
		onMessageRecived(reciveMessage)
	}, [])
	
	*/
	return (
		<div style={sideBarWrapper}>
			<SidebarHeader selectAddContactState={{selectAddContact, setSelectAddContact}} />
			<div style={sideBarItems}>
				{contacts.map((contact, i) => {
					return <SidebarItem key={i} info={contact} selectedChatState={{selectedContactInfo, setselectedContactInfo}}  />
				})}
			</div>
		</div>
	)
}


const sideBarWrapper: CSS.Properties = {
	display: 'flex',
	flexDirection: 'column',
	width: 'inherit',
	backgroundColor: '#476072'
}

const sideBarItems: CSS.Properties = {
	overflowY: 'scroll',
	height: '90%'
}

interface SidebarProps {
	contactsInfo: {
		contacts: Array<User>,
		setContacts: React.Dispatch<React.SetStateAction<Array<User>>>
	}
	selectedChatState : {
		selectedContactInfo: User,
		setselectedContactInfo: React.Dispatch<React.SetStateAction<User>>
	},
	selectAddContactState: {
		selectAddContact: boolean,
		setSelectAddContact: React.Dispatch<React.SetStateAction<boolean>>
	}
}


export default Sidebar