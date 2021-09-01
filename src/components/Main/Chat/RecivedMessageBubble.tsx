import CSS from 'csstype'
import Message from '../../../interfaces/MessageInterface'
const RecivedMessageBubble = ({ message}: PropsInterface) => {
	return (
		<div style={recivedMessageStyle}>
			<span style={recivedBeforeStyle}></span>
			<p>{message.text}</p>
			<span style={recivedAfterStyle}></span>
		</div>
	)
}

const recivedMessageStyle: CSS.Properties = {
	margin: '40px',
	display: 'inline-block',
	position: 'relative',
	alignSelf: 'flex-start',
	width: '200px',
	height: 'auto',
	backgroundColor: '#e5e5ea',
	borderRadius: '10px',
	wordWrap: 'break-word',
	color: 'black'
}

const recivedBeforeStyle: CSS.Properties = {
	'borderBottomRightRadius': '0.8rem 0.7rem',
	'borderLeft': '1rem solid #e5e5ea',
	'left': '-0.35rem',
	'transform': 'translate(0, -0.1rem)',
	'bottom': '-0.1rem',
	'content': '\'\'',
	'height': '1rem',
	'position': 'absolute'
}

const recivedAfterStyle: CSS.Properties = {
	'backgroundColor': '#334257',
	'borderBottomRightRadius': '0.5rem',
	'left': '20px',
	'transform': 'translate(-30px, -2px)',
	'width': '10px',
	'bottom': '-0.1rem',
	'content': '\'\'',
	'height': '1rem',
	'position': 'absolute'
}


interface PropsInterface {
	message: Message
}

export default RecivedMessageBubble