
import { useEffect, useState } from "react"
import style from "./App.module.css"
import axios from "axios"

type UserType = {
login: string
id: number
}

// type SearchUsersType = {
// 	items: UserType[]
// }

function App() {

const [selectedUser, setSelectedUser] = useState <UserType | null> (null)
const [users, setUsers] = useState<UserType[]>([]);
const [ tempSearch, setTempSearch] = useState("raspberry1")
const [ searchTerm, setSearchTerm] = useState("raspberry1")

useEffect(() => {
	if( selectedUser) {
		document.title = selectedUser.login
	}
}, [selectedUser]
)

useEffect( () => {
axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
.then ( res => {
	setUsers(res.data.items)
})
}, [searchTerm])


return (
	<div className={style.main}>
	<div>
		<input className={style.input} 
		placeholder='search' 
		value={tempSearch}
		onChange={ (e) => { setTempSearch( e.currentTarget.value) }}/> 
		<button className={style.input_button}
					onClick={() => setSearchTerm(tempSearch)}>FIND</button>
	</div>
	<ul className={style.list}>
		{ users.map( user => 
		<li 
		className={selectedUser === user ? style.selected : ""}
		key = {user.id}
		onClick={() => {
			setSelectedUser(user);
			}
		}
		> {user.login} </li>
		)}
	</ul>
	</div>
)
}

export default App
