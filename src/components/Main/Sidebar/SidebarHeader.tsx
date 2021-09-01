import UserImg from '../../../imgs/user.svg'
import AddContactImg from '../../../imgs/addContact.svg'
import logoutImg from '../../../imgs/logout.svg'
import CSS from 'csstype'
import {Link, useHistory} from 'react-router-dom'

const SidebarHeader = ({selectAddContactState: {selectAddContact, setSelectAddContact}}: props): JSX.Element => {

	const redirectToAddContact = () => setSelectAddContact(!selectAddContact)
	const history = useHistory()
	const logOut = () => {
		localStorage.removeItem('token')
		history.push('/auth')
	}
	return (
		<div style={mainDivStyle}>
			<Link style={UserPhoto} to="/settings"><img src={UserImg}></img></Link>
			<img style={addContact} src={AddContactImg} onClick={redirectToAddContact}></img>
			<img style={logout} src={logoutImg} onClick={logOut}></img>
		</div>
	)
}

const logout: CSS.Properties = {
	height: '40px',
	width: '40px',
	margin: '5px 5px',
	alignItems: 'center',
	cursor: 'pointer'
}

const addContact: CSS.Properties = {
	height: '40px',
	width: '40px',
	alignItems: 'center',
	cursor: 'pointer'
}

const UserPhoto: CSS.Properties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '50px',
	width: '50px',
	backgroundColor:'white',
	borderRadius: '50%',
	marginLeft: '5px'
}

const mainDivStyle: CSS.Properties = {
	display: 'grid',
	alignItems: 'center',
	gridTemplateColumns: '9fr 0.3fr 0.3fr',
	backgroundColor: '#548CA8',
	color: 'white',
	fontSize: '25px',
	height: '10%',
}

interface props {
	selectAddContactState: {
		selectAddContact: boolean,
		setSelectAddContact: React.Dispatch<React.SetStateAction<boolean>>
	}
}

export default SidebarHeader