import User from '../../../interfaces/UserInterface'
import CSS from 'csstype'
import UserImg from '../../../imgs/user.svg'

const ChatHeader = ({ selectedChatState: { selectedContactInfo, setselectedContactInfo } }: PropsInterface): JSX.Element => {

	return (
		<div style={mainWrapperStyle}>
			<div style={UserPhoto}>
				<img src={UserImg}></img>
			</div>
			<div style={nameDivStyle}>{selectedContactInfo?.name}</div>
		</div>
	)
}

const nameDivStyle: CSS.Properties = {
	textAlign: 'left'
}


const UserPhoto: CSS.Properties = {
	height: '50px',
	width: '50px',
	backgroundColor: 'white',
	borderRadius: '50%',
	marginLeft: '10px',
}

const mainWrapperStyle: CSS.Properties = {
	display: 'grid',
	alignItems: 'center',
	height: '10%',
	gridTemplateRows: 'inherit',
	gridTemplateColumns: '75px auto',
	backgroundColor: '#476072',
	color: 'white',
	fontSize: '25px',
	textDecoration: 'none',
}


interface PropsInterface {
	selectedChatState: {
		selectedContactInfo: User,
		setselectedContactInfo: React.Dispatch<React.SetStateAction<User>>
	}
}

export default ChatHeader