
import { useEffect, useState } from "react"
import style from "./App.module.css"
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


const [ searchTerm, setSearchTerm] = useState("raspberry1")

const [selectedUser, setSelectedUser] = useState <UserSearchType | null> (null)


useEffect(() => {
	if( selectedUser) {
		document.title = selectedUser.login
	}
}, [selectedUser]
)

return (
	<div className={style.main}>
	<div>
		<Input setSearchTerm={setSearchTerm}/>
		<UserList searchTerm={searchTerm} selectedUser={selectedUser} onSelectedUser={setSelectedUser}/>
	</div>
		<Profile  selectedUser={selectedUser}/>
	</div>
)
}

export default App
