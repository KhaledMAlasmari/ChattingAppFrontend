interface User {
	username: string,
	name: string,
	lastOnline: Date,
	numberOfNewMessages: number,
	avatar?: Buffer
}


export default User