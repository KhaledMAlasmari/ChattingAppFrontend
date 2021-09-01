import CSS from 'csstype'
import UserImg from '../../../imgs/user.svg'
import EnterChat from '../../../imgs/next.svg'
import User from '../../../interfaces/UserInterface'
import { markMessagesAsRead } from '../../../services/socketClient'
function SidebarItem({ info: { name, username, lastOnline, numberOfNewMessages }, selectedChatState: {selectedContactInfo, setselectedContactInfo} }: props): JSX.Element {

	const selectChat = () => {
		setselectedContactInfo({name, username, lastOnline, numberOfNewMessages: 0})
		markMessagesAsRead(username)
	}

	if(selectedContactInfo.username === username)
		return (
			<div id={username} style={mainDivSelctedStyle} onClick={selectChat}>
				<div style={UserPhoto}>
					<img src={UserImg}></img>
				</div>
				<div style={contactName}>{name}</div>
				<img style={enterChat} src={EnterChat}></img>
			</div>
		)
		
	return (
		<div id={username} style={mainDivStyle} onClick={selectChat}>
			<div style={UserPhoto}>
				<img src={UserImg}></img>
			</div>
			<div style={contactName}>{name}</div>
			<p style={newMessageAlertStyle}>{numberOfNewMessages !== undefined? numberOfNewMessages : null}</p>
			<img style={enterChat} src={EnterChat}></img>
		</div>
	)
}

const enterChat: CSS.Properties = {
	width: '15px',
	height: '15px',
}

const contactName: CSS.Properties = {
	display: 'flex',
	justifyContent: 'left',
	margin: '25px'
}


const UserPhoto: CSS.Properties = {
	height: '50px',
	width: '50px',
	backgroundColor: 'white',
	borderRadius: '50%',
	marginLeft: '5px'
}



const mainDivStyle: CSS.Properties = {
	display: 'grid',
	alignItems: 'center',
	gridTemplateColumns: '2fr 10fr 2fr 1fr',
	backgroundColor: '#476072',
	color: 'white',
	fontSize: '25px',
	height: '125px',
	textDecoration: 'none',
	cursor: 'pointer',
}

const newMessageAlertStyle: CSS.Properties = {
	backgroundColor: '#74bec1',
	borderWidth: '0px 0px',
	borderRadius: '20px'

}
const mainDivSelctedStyle: CSS.Properties = {
	display: 'grid',
	alignItems: 'center',
	gridTemplateColumns: '2fr 10fr 1fr',
	backgroundColor: '#002E47',
	color: 'white',
	fontSize: '25px',
	height: '125px',
	textDecoration: 'none',
	cursor: 'pointer',
}



interface props {
	info: User
	selectedChatState : {
		selectedContactInfo: User,
		setselectedContactInfo: React.Dispatch<React.SetStateAction<User>>
	}
}

export default SidebarItem