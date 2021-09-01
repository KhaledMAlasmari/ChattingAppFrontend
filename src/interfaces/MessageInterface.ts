interface Message {
    senderUsername: string
    reciverUsername: string
    text: string
    image?: { data: Buffer; contentType: string }
    isRead: boolean
    timeSent: Date
    timeRead: Date
}

export default Message
