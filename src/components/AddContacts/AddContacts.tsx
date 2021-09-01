import CSS from 'csstype'
import AddContactForm from './AddContactForm'
import AddContactHeader from './AddContactHeader'

const AddContacts = ({selectAddContactState: {selectAddContact, setSelectAddContact}}: props): JSX.Element => {
	return (
		<div style={mainWrapper}>
			<AddContactHeader selectAddContactState={{selectAddContact, setSelectAddContact}} />
			<AddContactForm />
		</div>
	)
}


const mainWrapper: CSS.Properties = {
	color: 'white',
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: '#334257',
	alignItems: 'center',
	textAlign: 'center',
	width: '100%',
	height: '100%'
}

interface props {
	selectAddContactState: {
		selectAddContact: boolean,
		setSelectAddContact: React.Dispatch<React.SetStateAction<boolean>>
	}
}

export default AddContacts