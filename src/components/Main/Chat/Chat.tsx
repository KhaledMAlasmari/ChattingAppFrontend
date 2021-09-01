import CSS from 'csstype'
import ChatInterface from '../../../interfaces/ChatInterface'
import User from '../../../interfaces/UserInterface'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatBox from './ChatBox'
import { useEffect, useState } from 'react'
import { checkIfMessageWasSent, onMessageRecived } from '../../../services/socketClient'
import Message from '../../../interfaces/MessageInterface'


const Chat = ({ chatState: { chats, setChats }, selectedChatState: { selectedContactInfo, setselectedContactInfo } }: chatProps): JSX.Element => {

	const [textInput, setTextInput] = useState('')
	
	useEffect(() => {
		const sendChat = (recivedMessage: Message) => {
			const user = recivedMessage.reciverUsername
			const index = findUserChatsIndex(user)
			const modifiedArray = [...chats]
			modifiedArray[index].Messages.push(recivedMessage)
			setChats(modifiedArray)
		}

		const reciveMessage = (recivedMessage: Message) => {
			const user = recivedMessage.senderUsername
			const index = findUserChatsIndex(user)
			const modifiedArray = [...chats]
			modifiedArray[index].Messages.push(recivedMessage)
			setChats(modifiedArray)
		}
		checkIfMessageWasSent(sendChat)
		onMessageRecived(reciveMessage)
	}, [])
	
	const findUserChats = (): ChatInterface => {
		if (chats) {
			const length = chats.length
			for (let i = 0; i < length; i++) {
				if (chats[i].username === selectedContactInfo?.username)
					return chats[i]
			}
		}
		return { 'username': selectedContactInfo!.username, Messages: [] }
	}

	const findUserChatsIndex = (username: string) => {
		if (chats) {
			const length = chats.length
			for (let i = 0; i < length; i++) {
				if (chats[i].username === username)
					return i
			}
		}
		const modifiedArray = [...chats]
		modifiedArray.push({ 'username': selectedContactInfo.username, Messages: [] })
		setChats(modifiedArray)
		return modifiedArray.length -1
	}

	return (
		<div style={chatStyle}>
			<ChatHeader selectedChatState={{ selectedContactInfo, setselectedContactInfo }} />
			<ChatBody chat={findUserChats()} selectedChatState={{ selectedContactInfo, setselectedContactInfo }} />
			<ChatBox selectedChatState={{ selectedContactInfo, setselectedContactInfo }} textInputState={{ textInput, setTextInput }} />
		</div>
	)
}

const chatStyle: CSS.Properties = {
	backgroundColor: '#334257',
	height: '100%',
	width: '100%',
	color: 'white',
}


interface chatProps {
	chatState: {
		chats: Array<ChatInterface>,
		setChats: React.Dispatch<React.SetStateAction<ChatInterface[]>>
	},
	selectedChatState: {
		selectedContactInfo: User,
		setselectedContactInfo: React.Dispatch<React.SetStateAction<User>>
	}
}

export default Chat
