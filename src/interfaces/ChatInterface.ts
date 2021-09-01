interface Chat {
	username: string,
	Messages: Array<{
		senderUsername: string,
		reciverUsername: string,
		text : string,
		image?: { data: Buffer, contentType: string },
		isRead: boolean,
		timeSent: Date,
		timeRead: Date,
	}>
}


export default Chat 