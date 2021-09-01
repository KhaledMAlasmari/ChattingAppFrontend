import CSS from 'csstype'
import { useEffect, useState } from 'react'
import Message from '../../../interfaces/MessageInterface'
import { onMessageRead } from '../../../services/socketClient'
const SentMessageBubble = ({ message, contactUsername}: PropsInterface): JSX.Element => {
	const timeSent = new Date(message.timeSent)
	const [messageMetadata, setMessageMetadata] = useState<{isRead: boolean, timeRead: Date}>({isRead: message.isRead, timeRead: new Date(message.timeRead)})
	useEffect(() => {
		// if the message isn't read, listen on the socket to get the message read status
		if(!messageMetadata.isRead)
			onMessageRead((response: {username: string, messagesRead: boolean, timeRead: Date}) => {
				if(contactUsername === response.username)
					setMessageMetadata({isRead: response.messagesRead, timeRead: new Date(response.timeRead)})
			})
	}, [])
	// beforeSpanStyle && afterSpanStyle are used to shape the message bubble, I could probably find a better way to do it but I can't bother myself with this...
	return (
		<div style={sentMessageStyle} >
			<span style={beforeSpanStyle}></span>
			<p>{message.text}</p>
			<div style={messageMetaDataStyle}>
				<p title={messageMetadata.isRead? `${messageMetadata.timeRead.getFullYear()}\\${messageMetadata.timeRead.getMonth()+1}\\${messageMetadata.timeRead.getUTCDate()}  ${messageMetadata.timeRead.getHours()}:${messageMetadata.timeRead.getMinutes()}` : ''} style={messageReadStatus}>{messageMetadata.isRead ? '✅' : '☑️'}</p>
				<p>{timeSent.getFullYear()}\{timeSent.getMonth()+1}\{timeSent.getUTCDate()}  {timeSent.getHours() % 12}:{timeSent.getMinutes()}</p>
			</div>
			<span style={afterSpanStyle}></span>
		</div>
	)

}

const messageMetaDataStyle : CSS.Properties = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	margin: '0px 10px',
	fontSize: '10px',
}

const messageReadStatus : CSS.Properties = {
	fontSize: '15px'
}




const beforeSpanStyle: CSS.Properties = {
	'borderBottomLeftRadius': '0.8rem 0.7rem',
	'borderRight': '1rem solid #248bf5',
	'right': '-0.35rem',
	'transform': 'translate(0, -0.1rem)',
	'bottom': '-0.1rem',
	'content': '\'\'',
	'height': '1rem',
	'position': 'absolute'
}

const afterSpanStyle: CSS.Properties = {
	'backgroundColor': '#334257',
	'borderBottomLeftRadius': '0.5rem',
	'right': '-40px',
	'transform': 'translate(-30px, -2px)',
	'width': '10px',
	'bottom': '-0.1rem',
	'content': '\'\'',
	'height': '1rem',
	'position': 'absolute'
}


const sentMessageStyle: CSS.Properties = {
	margin: '40px',
	display: 'inline-block',
	position: 'relative',
	alignSelf: 'flex-end',
	width: '200px',
	height: 'auto',
	backgroundColor: '#248bf5',
	borderRadius: '10px',
	wordWrap: 'break-word',
}

interface PropsInterface {
	message: Message,
	contactUsername: string,
}


export default SentMessageBubble