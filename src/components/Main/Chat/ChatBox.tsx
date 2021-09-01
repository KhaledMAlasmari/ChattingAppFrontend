import CSS from 'csstype'
import { useEffect } from 'react'
import SendButton from '../../../imgs/sendChatButton.svg'
import User from '../../../interfaces/UserInterface'
import {sendMessage} from '../../../services/socketClient'
const ChatBox = ({selectedChatState: {selectedContactInfo, setselectedContactInfo}, textInputState: {textInput, setTextInput}}: ChatboxProps) => {

	const sendChat = () => {
		sendMessage(textInput, selectedContactInfo.username)
	}

	const changeTextInputState = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const text = event.target.value
		setTextInput(text)
	}

	return (
		<div style={mainWrapperStyle}>
			<img style={sendButtonStyle} src={SendButton} onClick={sendChat}></img>
			<textarea id="textField" onChange={changeTextInputState} style={inputBoxStyle} rows={2}></textarea>
		</div>
	)
}

const sendButtonStyle: CSS.Properties = {
	width: '35px',
	height: '35px',
	justifySelf: 'center',
	cursor: 'pointer'
}


const mainWrapperStyle: CSS.Properties = {
	display: 'flex',
	flexDirection: 'row',
	height: '10%',
	width: 'inherit',
	alignItems: 'center',
	justifyContent: 'flex-end',
	backgroundColor: '#548CA8'
}

const inputBoxStyle: CSS.Properties = {
	width: '96%',
	appearance: 'none',
	margin: '0px 10px',
	padding: '0px 0px',
	justifySelf: 'center',
	resize: 'none',
	fontSize: '20px',
	border: '0px solid',
	borderRadius: '15px'
}

interface ChatboxProps{
	selectedChatState : {
		selectedContactInfo: User,
		setselectedContactInfo: React.Dispatch<React.SetStateAction<User>>
	}
	textInputState : {
		textInput: string,
		setTextInput: React.Dispatch<React.SetStateAction<string>>
	}
}


export default ChatBox