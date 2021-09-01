import Chat from '../../../interfaces/ChatInterface'
import CSS from 'csstype'
import User from '../../../interfaces/UserInterface'
import SentMessageBubble from './SentMessageBubble'
import RecivedMessageBubble from './RecivedMessageBubble'
import { useEffect } from 'react'
const ChatBody = ({chat, selectedChatState:{selectedContactInfo, setselectedContactInfo}}: PropsInterface): JSX.Element => {

	useEffect(() => {
		const element = document.getElementById('mainWrapper')
		element?.scrollTo({behavior: 'smooth',top: element.scrollHeight})
	})
	return (
		<div id="mainWrapper" style={mainWrapperStyle}>
			{chat.Messages.map((msg, key) => {
				return msg.senderUsername !== selectedContactInfo.username ? 
					<SentMessageBubble key={key} message={msg} contactUsername={selectedContactInfo.username}/>
					:
					<RecivedMessageBubble key={key} message={msg}/>
			})}
		</div>
	)
}

const mainWrapperStyle: CSS.Properties = {
	display: 'flex',
	flexDirection: 'column',
	height: '80%',
	overflowY: 'scroll',
}


interface PropsInterface {
	chat: Chat,
	selectedChatState: {
		selectedContactInfo: User,
		setselectedContactInfo: React.Dispatch<React.SetStateAction<User>>
	}
}

export default ChatBody