import { io, Socket } from 'socket.io-client'
import Message from '../interfaces/MessageInterface'

let socket: Socket

const initiateSocket = (): void => {
	if(!socket){
		const url =`${process.env.PUBLIC_URL}`
		socket = io(url, {
			extraHeaders: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
		socket.emit('userIsOnline')
	}
	socket.connect()
}

const disconnectSocket = (): void => {
	socket.disconnect()
}

const sendMessage = (text: string, reciverUsername: string): void => {
	socket.emit('sendMessage', { text, reciverUsername })
}


const checkIfMessageWasSent = (callback: any): void => {
	socket.on('sendMessage', callback)
}

const onMessageRecived = (callback: any): void => {
	socket.on('reciveMessage', callback)
}

const markMessagesAsRead = (senderUsername: string): void => {
	socket.emit('markMessagesAsRead', {senderUsername})
}

const onMessageRead = (callback: any): void => {
	socket.on('markMessagesAsRead', callback)
}


export {initiateSocket,disconnectSocket, sendMessage, checkIfMessageWasSent, onMessageRecived, markMessagesAsRead, onMessageRead}
