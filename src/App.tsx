
import { useEffect, useState } from "react"
import style from "./App.module.css"
import axios from "axios"
import Input from "./components/Input"
import UserList from "./components/UserList"
import Profile from "./components/Profile"

export type UserSearchType = {
	login: string
	id: number
	}

export type SearchResult = {
	items: UserSearchType[]
}

export type UserType = {
	login: string
	avatar_url: string
	location: string
	followers: string
}

function App() {

const [users, setUsers] = useState<UserSearchType[]>([]);
const [ searchTerm, setSearchTerm] = useState("raspberry1")
const [ userDetails, setUserDetails] = useState <UserType | null> (null)
const [selectedUser, setSelectedUser] = useState <UserSearchType | null> (null)


useEffect(() => {
	if( selectedUser) {
		document.title = selectedUser.login
	}
}, [selectedUser]
)

useEffect(() => {
	if( selectedUser) {
		document.title = selectedUser.login
	}
}, [selectedUser]
)

useEffect( () => {
axios
.get<SearchResult>(`https://api.github.com/search/users?q=${searchTerm}`)
.then ( res => {
	setUsers(res.data.items)
})
}, [searchTerm])

useEffect( () => {
	if( selectedUser) {
		axios
		.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
		.then ( res => {
			setUserDetails(res.data)
		})
	}
	}, [selectedUser])

return (
	<div className={style.main}>
	<div>
		<Input setSearchTerm={setSearchTerm}/>
		<UserList setSelectedUser={setSelectedUser} users={users} selectedUser={selectedUser}/>
	</div>

	{ userDetails? 
		<Profile userDetails={userDetails}/>
		: <div></div>
}
	</div>
)
}

export default App
