import UserImg from '../../imgs/user.svg'
import AddContactImg from '../../imgs/addContact.svg'
import CSS from 'csstype'
import {Link} from 'react-router-dom'
import HomeIcon from '../../imgs/HomeIcon.svg'

const AddContactHeader = ({selectAddContactState: {selectAddContact, setSelectAddContact}}: props): JSX.Element => {
	const redirectToMain = () => setSelectAddContact(!selectAddContact)
	return (
		<div style={mainDivStyle}>
			<Link style={UserPhoto} to="/settings"><img src={UserImg}></img></Link>
			<img style={addContact} src={HomeIcon} onClick={redirectToMain}></img>
		</div>
	)
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
	gridTemplateColumns: '9fr 0.3fr',
	backgroundColor: '#548CA8',
	color: 'white',
	fontSize: '25px',
	height: '10%',
	width: '100%',
}

interface props {
	selectAddContactState: {
		selectAddContact: boolean,
		setSelectAddContact: React.Dispatch<React.SetStateAction<boolean>>
	}
}
export default AddContactHeader